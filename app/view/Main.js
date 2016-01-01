/*
 * File: app/view/Main.js
 */

Ext.define('bentonMobile.view.Main', {
    extend: 'Ext.Container',
    alias: 'widget.main',

    requires: [
        'bentonMobile.view.HeadlinesList',
        'bentonMobile.view.EventList',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.dataview.List'
    ],

    config: {
        id: 'MainView',
        scrollable: false,
        layout: {
            type: 'card',
            animation: 'slide'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            button.up('#MainView').setActiveItem(0);
                        },
                        text: 'Headlines'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            button.up('#MainView').setActiveItem(1);
                        },
                        text: 'Events'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            button.up('#MainView').getActiveItem().getStore().load();
                        },
                        iconCls: 'refresh',
                        text: ''
                    }
                ]
            },
            {
                xtype: 'HeadlinesList'
            },
            {
                xtype: 'EventList'
            }
        ]
    }

});