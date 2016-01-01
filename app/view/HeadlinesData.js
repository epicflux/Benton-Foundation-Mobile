Ext.define('bentonMobile.view.HeadlinesData', {
    extend: 'Ext.DataView',
    xtype: 'headlinesdata',
    flex : 1,
    config: {
        store: 'Headlines',
        itemTpl: '<div class="headline"><div class="headlineContent"><div class="headlineTitle">{title}</div><p class="headlineDate">{field_publish_date_value}</p><div class="headlineTeaser">{teaser}</div></div></div>'
    }
});