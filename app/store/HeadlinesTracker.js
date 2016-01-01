/*
 * File: app/store/HeadlinesTracker.js
 */

Ext.define('bentonMobile.store.HeadlinesTracker', {
    extend: 'Ext.data.Store',

    requires: [
        'bentonMobile.model.HeadlinesTracker'
    ],

    config: {
        autoLoad: true,
        autoSync: true,
        model: 'bentonMobile.model.HeadlinesTracker',
        storeId: 'HeadlinesTracker'
    }
});