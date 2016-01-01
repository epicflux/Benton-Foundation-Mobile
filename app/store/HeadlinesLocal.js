Ext.define('bentonMobile.store.HeadlinesLocal', {
    extend: 'Ext.data.Store',
    requires: ['bentonMobile.model.Headlines'],
    config: {
        model: 'bentonMobile.model.Headlines',
        autoLoad: false,
        autoSync: true,
        proxy: {
            type: 'localstorage',
            id: 'headlineslocal'
        }
    }
});