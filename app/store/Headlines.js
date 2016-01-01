/*
 * File: app/store/Headlines.js
 */

Ext.define('bentonMobile.store.Headlines', {
    extend: 'Ext.data.Store',
    alias: 'store.headlines',

    requires: [
        'bentonMobile.model.Headlines',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'bentonMobile.model.Headlines',
        storeId: 'Headlines',
        proxy: {
            type: 'jsonp',
            extraParams: {
                tid: 'All'
            },
            url: 'http://benton.org/apps/benton_mobile/0-3/headlines-list.json',
            reader: {
                type: 'json',
                rootProperty: 'nodes'
            }
        },
        listeners: [
            {
                fn: 'onStoreLoad',
                event: 'load'
            }
        ]
    },

    constructor: function() {
        var me = this;
        me.callParent(arguments);
        me.getProxy().getReader().on([{
            fn: 'onJsonException',
            event: 'exception',
            scope: me
        }]);
    },

    onJsonException: function(reader, response, error, eOpts) {
        Ext.Msg.alert("No Connection", "We could not load the latest Headlines. Please check your Internet connection");
    },

    onStoreLoad: function(store, records, successful, operation, eOpts) {
        var trackerStore = Ext.getStore('HeadlinesTracker');
        store.each(function (record){
          var exist = trackerStore.findRecord('nid', record.data.nid);
          if (exist && exist.data.read == 1) {
            record.set('read', 1);
          }
        });

        var items = Ext.select("div.x-list-item", 'HeadlinesList'),
            readMatch = -1,
            itemEl = null;
        store.each(function (record){
            itemEl = Ext.get(items.elements[store.indexOf(record)]);
            itemEl.removeCls('item-read');
            readMatch = store.ConfirmRead(store, record.data.nid);
            if (readMatch > -1) {
                itemEl.addCls('item-read');
            }

            if (record.data.type == 'headline_link') {
                itemEl.addCls('source-view');
            }
        });
    },

    ConfirmRead: function(store, nid) {
        return store.findBy(function(record) {
          if (record.get('nid') == nid && record.get('read') === 1){
            return true;
          }
        });
    }

});