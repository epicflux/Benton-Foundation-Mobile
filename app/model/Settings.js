/*
 * File: app/model/Settings.js
 */

Ext.define('bentonMobile.model.Settings', {
    extend: 'Ext.data.Model',
    alias: 'model.Settings',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.LocalStorage'
    ],

    config: {
        fields: [
            {
                defaultValue: 'All',
                name: 'HeadlinesTid',
                type: 'string'
            }
        ],
        proxy: {
            type: 'localstorage',
            id: 'settings'
        }
    }
});