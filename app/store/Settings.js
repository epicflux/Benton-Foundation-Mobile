/*
 * File: app/store/Settings.js
 */

Ext.define('bentonMobile.store.Settings', {
    extend: 'Ext.data.Store',

    requires: [
        'bentonMobile.model.Settings'
    ],

    config: {
        autoLoad: true,
        model: 'bentonMobile.model.Settings',
        storeId: 'Settings'
    }
});