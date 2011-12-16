Ext.ns('bentonMobile');

bentonMobile.calendarPanel = Ext.extend(Ext.Panel, {

  layout: 'fit'

  ,initComponent: function() {

    // create newsletter store
    this.calendarStore = new Ext.data.Store({
      model: 'CalendarItem'
      ,autoLoad: true
      ,storeId: 'calendarStore'
    });
 
    // create details object
    var calendarContent = new Ext.DataView({
      id: 'calendarContent'
      ,cls: 'calendarPanel'
      ,styleHtmlContent: true
      ,scroll: 'vertical'
      ,store: this.calendarStore
      ,tpl: [
        '<tpl for=".">'
          ,'<div class="calendarEvent">'
              ,'<p class="eventContent">'
                ,'<h3>{title}</h3>'
                   ,'<div>{field_date_value}</div>'
              ,'</p>'
          ,'</div>'
        ,'</tpl>'
      ]
      ,itemSelector:'div.calendarEvent'
    });

    this.items = [calendarContent];

    bentonMobile.calendarPanel.superclass.initComponent.apply(this, arguments);

  }
});