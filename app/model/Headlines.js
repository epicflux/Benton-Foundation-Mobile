/*
 * File: app/model/Headlines.js
 */

Ext.define('bentonMobile.model.Headlines', {
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
                name: 'latitude',
                type: 'auto'
            },
            {
                name: 'longitude',
                type: 'auto'
            },
            {
                name: 'source',
                type: 'string'
            },
            {
                name: 'topics',
                type: 'string'
            },
            {
                name: 'link',
                type: 'string'
            },
            {
                name: 'path',
                type: 'string'
            },
            {
                name: 'field_publish_date_value',
                type: 'string'
            },
            {
                name: 'type',
                type: 'string'
            },
            {
                defaultValue: 0,
                name: 'read',
                type: 'int'
            }
        ]
    }
});