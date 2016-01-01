Ext.define('bentonMobile.view.SettingsCard', {
    extend: 'Ext.form.Panel',
    xtype: 'settingscard',
    alias: 'widget.settingscard',
    id: 'settingscard',
    requires: ['Ext.field.Select'],
    config: {
        items: [
            {
                xtype: 'selectfield',
                name: 'headlinesFilterTopic',
                label: 'Filter Headlines by Topic',
                store: 'Topics',
                displayField: 'term',
                valueField: 'tid',
            },
            {
                xtype: 'button',
                text: 'Save',
                settingsSave: true
            }
        ]
    }
});