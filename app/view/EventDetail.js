/*
 * File: app/view/EventDetail.js
 */

Ext.define('bentonMobile.view.EventDetail', {
    extend: 'Ext.Panel',
    alias: 'widget.EventDetail',

    requires: [
        'Ext.XTemplate',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer'
    ],

    config: {
        centered: true,
        data: 'title: "title", teaser: "There\'s been an error loading this Headline"',
        height: '90%',
        hidden: true,
        id: 'EventDetail',
        styleHtmlContent: true,
        width: '95%',
        hideOnMaskTap: true,
        layout: 'vbox',
        modal: true,
        scrollable: true,
        tpl: [
            '<div class="event"><div class="eventContent"><div class="eventTitle">{title}</div><p class="eventDate">{date}</p><div class="eventTeaser">{teaser}</div></div></div><a href="{path}" class="button-to-web-source eventGoBenton" target="_blank">&nbsp;</a>\''
        ],
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            button.up('panel').hide();
                        },
                        ui: 'action',
                        text: 'Close'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            bentonMobile.app.getController('Main').EventNav(button);
                        },
                        ui: 'back',
                        text: 'Previous'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            bentonMobile.app.getController('Main').EventNav(button);
                        },
                        ui: 'forward',
                        text: 'Next'
                    }
                ]
            }
        ]
    }

});