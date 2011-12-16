Ext.regModel('CalendarItem', { 
    fields: [
        {name: 'nid', type: 'integer'}
        ,{name: 'title', type: 'string'}
        ,{name: 'latitude', type: 'auto'}
        ,{name: 'longitude', type: 'auto'}
        ,{name: 'field_date_value', type: 'auto'}
        ,{name: 'path', type: 'auto'}
    ]
	,proxy: {
		type: 'scripttag'
		,url: 'http://benton.org/apps/benton_mobile/0-1/events.json'
		,reader: {
			type: 'json'
			,root: 'nodes'
		}
		,callbackParam: 'callback'
		,listeners: {
                    exception: function(proxy, response, operation) {
                        Ext.Msg.alert('Error', 'We weren\'t able to load the latest events. Please check that you are connected to the Internet');
                    }
                }
	}
});