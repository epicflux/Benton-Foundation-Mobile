/*
 * File: app/view/HeadlinesDetail.js
 */

Ext.define('bentonMobile.view.HeadlinesDetail', {
    extend: 'Ext.Panel',
    alias: 'widget.HeadlinesDetail',

    requires: [
        'Ext.XTemplate',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.SegmentedButton'
    ],

    config: {
        centered: true,
        data: 'title: "title", teaser: "There\'s been an error loading this Headline"',
        height: '90%',
        hidden: true,
        id: 'HeadlinesDetail',
        styleHtmlContent: true,
        width: '95%',
        hideOnMaskTap: true,
        layout: 'vbox',
        modal: true,
        scrollable: true,
        tpl: new Ext.XTemplate(
            '<div class="headline">',
            '<div class="headlineContent">',
            '<div class="headlineTitle">{title}</div>',
            '<tpl if="this.isHeadlineType(values)">',
                '<p class="headlineDate">{field_publish_date_value}{[values.source != "" ? ", " + values.source : ""]}</p>',
                '<div class="headlineTeaser">{teaser}</div>',
            '</tpl>',
            '</div>',
            '</div>',
            {
                isHeadlineType: function(values) {
                    return (values.type == 'headline');
                }
            }
        ),
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
                            bentonMobile.app.getController('Main').HeadlineNav(button);
                        },
                        ui: 'back',
                        text: 'Previous'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            bentonMobile.app.getController('Main').HeadlineNav(button);
                        },
                        ui: 'forward',
                        text: 'Next'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                ui: 'neutral',
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'segmentedbutton',
                        items: [
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    window.open(button.up('panel').getData().path, '_system');
                                    button.removeCls('x-button-pressed');
                                    button.removeCls('x-button-pressing');
                                },
                                iconCls: 'benton-view',
                                text: 'benton.org',
                                id: 'headline-benton-link'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    var item = button.up('panel').getData(),
                                        url = 'https://benton.org';

                                    // Depending on the item type select the correct path.
                                    if (item.type == 'headlines') {
                                        url = item.link;
                                    }
                                    else {
                                        url = item.path;
                                    }

                                    window.open(url, '_system');
                                    button.removeCls('x-button-pressed');
                                    button.removeCls('x-button-pressing');
                                },
                                iconCls: 'source-view',
                                text: 'View source',
                                id: 'headline-source-link'
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onHeadlinesDetailUpdatedata',
                event: 'updatedata'
            }
        ]
    },

    onHeadlinesDetailUpdatedata: function(component, newData, eOpts) {
        bentonMobile.app.getController('Main').HeadlineTrack(newData.nid);
        if (newData.type == 'headline') {
            component.down('#headline-benton-link').enable();
        }
        else {
            component.down('#headline-benton-link').disable();
        }
        component.down('#headline-source-link').setText(newData.source);
    }

});