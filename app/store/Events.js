/*
 * File: app/store/Events.js
 */

Ext.define('bentonMobile.store.Events', {
    extend: 'Ext.data.Store',

    requires: [
        'bentonMobile.model.Events',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'bentonMobile.model.Events',
        storeId: 'Events',
        proxy: {
            type: 'jsonp',
            url: 'http://benton.org/apps/benton_mobile/0-2/events/P30D',
            reader: {
                type: 'json',
                rootProperty: 'nodes'
            }
        }
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
    }

});