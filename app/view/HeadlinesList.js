/*
 * File: app/view/HeadlinesList.js
 */

Ext.define('bentonMobile.view.HeadlinesList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.HeadlinesList',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        id: 'HeadlinesList',
        store: 'Headlines',
        itemTpl: [
            '<div>{title}</div>'
        ],
        listeners: [
            {
                fn: 'onHeadlinesListActivate',
                event: 'activate'
            }
        ]
    },

    onHeadlinesListActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        store = newActiveItem.getStore();

        if (store.isLoaded() == false) {
          bentonMobile.app.getController('Main').HeadlinesListRefresh();
        }
    }

});