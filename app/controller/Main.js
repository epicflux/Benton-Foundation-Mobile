/*
 * File: app/controller/Main.js
 *
 */

Ext.define('bentonMobile.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'Headlines'
        ],

        refs: {
            HeadlinesDetail: {
                autoCreate: true,
                selector: '#HeadlinesDetail',
                xtype: 'HeadlinesDetail'
            },
            HeadlinesList: {
                selector: '#HeadlinesList',
                xtype: 'HeadlinesList'
            },
            EventList: {
                selector: '#EventList',
                xtype: 'EventList'
            },
            EventDetail: {
                autoCreate: true,
                selector: '#EventDetail',
                xtype: 'EventDetail'
            }
        },

        control: {
            "#HeadlinesList": {
                itemtap: 'onHeadlinesListItemTap'
            },
            "#EventList": {
                itemtap: 'onEventListItemTap'
            }
        }
    },

    onHeadlinesListItemTap: function(dataview, index, target, record, e, eOpts) {
        var view = this.getHeadlinesDetail();
        if (record.data.type == 'headline_link') {
            window.open(record.data.path, '_system');
        }
        else {
            this.NodeDetailView(dataview, index, view);
        }
    },

    onEventListItemTap: function(dataview, index, target, record, e, eOpts) {
        var view = this.getEventDetail();
        this.NodeDetailView(dataview, index, view);
    },

    NodeDetailView: function(list, index, view) {
        var selected  = list.getStore().getAt(index).getData();
        view.setData(selected);
        Ext.Viewport.add(view);
        view.show();
    },

    HeadlineNav: function(btn) {
        //get the current item's index
        var headlinesStore = Ext.getStore('Headlines'),
          index = headlinesStore.indexOfId(this.getHeadlinesList().getSelection()[0].id);

        if (btn.config.text == 'Next') {
          var headline = headlinesStore.getAt(index+1); //add one
        }
        else {
          var headline = headlinesStore.getAt(index-1); //subtract one
        }

        if (typeof(headline) == 'object') {
          //if there is another headline load it up, else go back to the list
          this.getHeadlinesDetail().setData(headline.getData());
          this.getHeadlinesList().select(headline);

          //animate the list scroll in the background
          var scroller = this.getHeadlinesList().getScrollable().getScroller(),
            scrollerEl = scroller.getElement(),
            itemEl = Ext.select("div.x-item-selected", this.getHeadlinesList().getId()),
            fly = Ext.fly(itemEl.elements[0]),
            itemOffsetY = fly.getOffsetsTo(scrollerEl)[1],
            start = scroller.getContainerSize().y * .5,
            end = scroller.getSize().y - (scroller.getContainerSize().y * .5);

          if (itemOffsetY < start) {
              scroller.scrollTo(0, 0, 'animation');
          }
          else if (itemOffsetY > end) {
            scroller.scrollTo(0, scroller.getSize().y - scroller.getContainerSize().y, 'animation');
          }
          else {
            scroller.scrollTo(0, itemOffsetY - start, 'animation');
          }
        }
        else {
          this.getHeadlinesDetail().hide();
        }
    },

    HeadlineTrack: function(nid) {
        //if the nid is null then do nothing
        if (!nid) {
          return;
        }

        var trackerStore = Ext.getStore('HeadlinesTracker'),
          headlinesStore = Ext.getStore('Headlines'),
          exist = trackerStore.findExact('nid', nid),
          headline = headlinesStore.findRecord('nid', nid);
          items = Ext.select("div.x-list-item", this.getHeadlinesList().getId()),
          itemEl = Ext.get(items.elements[headlinesStore.indexOf(headline)]);

        headline.set('read', 1);
        itemEl = Ext.get(items.elements[headlinesStore.indexOf(headline)]);
        itemEl.addCls('item-read');

        if (exist > -1) {
          trackerStore.findRecord('nid', nid).set('read', 1);
        }
        else {
          trackerStore.add(
            {
              nid: nid,
              read: 1
            }
          );
        }
        trackerStore.sync();
    },

    EventListRefresh: function(days) {
        if (!days) {
          days = 30;
        }
        var store = Ext.getStore('Events');
        store.getProxy().setUrl('http://benton.org/apps/benton_mobile/0-2/events/P' + days + 'D');
        store.load();
    },

    EventNav: function(btn) {
        //get the current item's index
        var store = Ext.getStore('Events'),
          index = store.indexOfId(this.getEventList().getSelection()[0].id);

        if (btn.config.text == 'Next') {
          var node = store.getAt(index+1); //add one
        }
        else {
          var node = store.getAt(index-1); //subtract one
        }

        if (typeof(node) == 'object') {
          //if there is another headline load it up, else go back to the list
          this.getEventDetail().setData(node.getData());
          this.getEventList().select(node);
        }
        else {
          this.getEventDetail().hide();
        }
    },

    HeadlinesListRefresh: function() {
        var settingsStore = Ext.getStore('Settings'),
          param = 'All';

        if (settingsStore.getAt(0)) {
          param = settingsStore.getAt(0).data.HeadlinesTopic > 0 ? settingsStore.getAt(0).data.HeadlinesTopic : 'All';
        }
        Ext.getStore('Headlines').load({
          params:{tid: param}
        });
    }

});