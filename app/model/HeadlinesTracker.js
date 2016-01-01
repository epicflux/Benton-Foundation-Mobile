/*
 * File: app/model/HeadlinesTracker.js
 */

Ext.define('bentonMobile.model.HeadlinesTracker', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.LocalStorage'
    ],

    config: {
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'nid',
                type: 'int'
            },
            {
                name: 'read',
                type: 'int'
            }
        ],
        proxy: {
            type: 'localstorage',
            id: 'headlinestracker'
        }
    }
});