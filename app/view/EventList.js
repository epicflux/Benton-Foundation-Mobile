/*
 * File: app/view/EventList.js
 */

Ext.define('bentonMobile.view.EventList', {
    extend: 'Ext.dataview.DataView',
    alias: 'widget.EventList',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Select'
    ],

    config: {
        baseCls: 'x-dataview event-tiled-view',
        id: 'EventList',
        defaultType: 'EventListItem',
        store: 'Events',
        useComponents: true,
        listeners: [
            {
                fn: 'onEventListActivate',
                event: 'activate'
            },
            {
                fn: 'onEventDateFilterChange',
                event: 'change',
                delegate: '#EventDateFilter'
            }
        ],
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'selectfield',
                        id: 'EventDateFilter',
                        itemId: 'myselectfield',
                        label: 'Show events for the next',
                        labelAlign: 'top',
                        name: 'EventDateFilter',
                        options: [
                            {
                                text: '30 days',
                                value: 30
                            },
                            {
                                text: '60 days',
                                value: 60
                            },
                            {
                                text: '90 days',
                                value: 90
                            }
                        ]
                    }
                ]
            }
        ]
    },

    onEventListActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        store = newActiveItem.getStore();

        if (store.isLoaded() == false) {
          bentonMobile.app.getController('Main').EventListRefresh(30);
        }
    },

    onEventDateFilterChange: function(selectfield, newValue, oldValue, eOpts) {
        bentonMobile.app.getController('Main').EventListRefresh(newValue);
    }

});