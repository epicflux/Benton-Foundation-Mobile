/**
 * @class Topics
 * @extends Ext.data.Model
 */
Ext.define('bentonMobile.model.Topics', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'term', type: 'string'},
            {name: 'tid', type: 'integer'},
            {name: 'parentTid', type: 'integer'}
        ]
    }
});