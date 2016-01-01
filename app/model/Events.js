/*
 * File: app/model/Events.js
 */

Ext.define('bentonMobile.model.Events', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'nid',
                type: 'int'
            },
            {
                name: 'title',
                type: 'string'
            },
            {
                name: 'teaser',
                type: 'string'
            },
            {
                name: 'month',
                type: 'string'
            },
            {
                name: 'day',
                type: 'string'
            },
            {
                name: 'date',
                type: 'string'
            },
            {
                name: 'path',
                type: 'string'
            },
            {
                name: 'address',
                type: 'string'
            }
        ]
    }
});