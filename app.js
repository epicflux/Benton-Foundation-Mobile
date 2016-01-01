/*
 * File: app.js
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    models: [
        'Headlines',
        'HeadlinesTracker',
        'Events',
        'Settings'
    ],
    stores: [
        'Headlines',
        'HeadlinesTracker',
        'Events',
        'Settings'
    ],
    views: [
        'Main',
        'HeadlinesList',
        'HeadlinesDetail',
        'EventList',
        'EventListItem',
        'EventDetail',
        'ShareOptions',
        'Settings'
    ],
    controllers: [
        'Main'
    ],
    name: 'bentonMobile',

    launch: function() {
        document.addEventListener('deviceready', function () {
          if (Ext.os.is.iOS && Ext.os.version.major >= 7) {
            document.body.style.marginTop = "20px";
            Ext.Viewport.setHeight(Ext.Viewport.getWindowHeight() - 20);
          }
        });
        Ext.create('bentonMobile.view.Main', {fullscreen: true});
    }

});
