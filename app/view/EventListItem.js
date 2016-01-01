/*
 * File: app/view/EventListItem.js
 */

Ext.define('bentonMobile.view.EventListItem', {
    extend: 'Ext.dataview.component.DataItem',
    alias: 'widget.EventListItem',

    requires: [
        'Ext.Component'
    ],

    config: {
        cls: 'event-list-item',
        padding: 10,
        layout: 'vbox',
        items: [
            {
                xtype: 'component',
                cls: 'event-day',
                html: 'Day',
                itemId: 'event-day'
            },
            {
                xtype: 'component',
                cls: 'event-title',
                html: 'Title',
                itemId: 'event-title'
            },
            {
                xtype: 'component',
                cls: 'event-month',
                html: 'Month',
                itemId: 'event-month'
            }
        ]
    },

    updateRecord: function(record) {
        // Provide an implementation to update this container's child items
        this.down('#event-day').setHtml(record.data.day);
        this.down('#event-title').setHtml(record.data.title);
        this.down('#event-month').setHtml(record.data.month);

        var color = {
          'Jan':'red',
          'Feb':'blue',
          'Mar':'orange',
          'Apr':'red',
          'May':'blue',
          'Jun':'orange',
          'Jul':'red',
          'Aug':'blue',
          'Sep':'orange',
          'Oct':'red',
          'Nov':'blue',
          'Dec':'orange'
        };
        this.addCls('event-color-' + color[record.data.month]);
    }

});