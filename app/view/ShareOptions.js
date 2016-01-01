/*
 * File: app/view/ShareOptions.js
 */

Ext.define('bentonMobile.view.ShareOptions', {
    extend: 'Ext.Panel',
    alias: 'widget.ShareOptions',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        centered: true,
        height: '70%',
        hidden: true,
        id: 'ShareOptions',
        styleHtmlContent: true,
        width: '70%',
        hideOnMaskTap: true,
        layout: 'vbox',
        modal: true,
        tpl: [
            '<a href="http://twitter.com/?status={[encodeURIComponent(values.title)]}%20{path}" class="button-to-web-source twitter-share-path" target="_blank">&nbsp;</a><a href="https://m.google.com/app/plus/x/?v=compose&content={[encodeURIComponent(values.title)]}%20{path}" class="button-to-web-source googleplus-share-path" target="_blank">&nbsp;</a><a href="http://www.facebook.com/sharer.php?u={path}&t={[encodeURIComponent(values.title)]}" class="button-to-web-source facebook-share-path" target="_blank">&nbsp;</a>'
        ]
    }

});