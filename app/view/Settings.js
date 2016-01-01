/*
 * File: app/view/Settings.js
 */

Ext.define('bentonMobile.view.Settings', {
    extend: 'Ext.Panel',
    alias: 'widget.Settings',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Select'
    ],

    config: {
        id: 'Settings',
        items: [
            {
                xtype: 'fieldset',
                title: 'MyFieldSet1',
                items: [
                    {
                        xtype: 'selectfield',
                        label: 'Filter Headlines by Topic'
                    }
                ]
            }
        ]
    }

});