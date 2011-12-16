Ext.regModel('ListItem', {
    fields: [
        {name: 'nid', type: 'integer'}
        ,{name: 'title', type: 'string'}
        ,{name: 'teaser', type: 'string'}
        ,{name: 'latitude', type: 'auto'}
        ,{name: 'longitude', type: 'auto'}
        ,{name: 'source', type: 'string'}
        ,{name: 'topics', type: 'string'}
        ,{name: 'link', type: 'string'}
        ,{name: 'path', type: 'string'}
        ,{name: 'field_publish_date_value', type: 'string'}
    ]
	,proxy: {
		type: 'scripttag'
		,url: 'http://benton.org/apps/benton_mobile/0-1/headlines-list.json'
		,reader: {
			type: 'json'
			,root: 'nodes'
		}
		,callbackParam: 'callback'
		,listeners: {
                    exception: function(proxy, response, operation){
                        Ext.Msg.alert('Error', 'We weren\'t able to load the latest headlines. Please check that you are connected to the Internet');
                    }
                }
	}
});