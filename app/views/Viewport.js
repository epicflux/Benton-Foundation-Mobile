Ext.ns('bentonMobile');

bentonMobile.Viewport = Ext.extend(Ext.Panel, {

  layout: 'card'
  ,activeItem: 'headlinesPanel'
  
  ,initComponent: function() {
  
    // configure layout items
    this.dockedItems = [{
      dock: 'top'
      ,xtype: 'toolbar'
      ,items: [{
        xtype: 'button'
        ,ui: 'home'
        ,text: 'Headlines'
        ,scope: this
        ,handler: function() {
          this.setActiveItem('headlinesPanel');
        }
       }
      ,{
        xtype: 'button'
        ,ui: 'home'
        ,text: 'Events'
        ,scope: this
        ,handler: function() {
          this.setActiveItem('calendarPanel');
        }
      }
      ,{
        xtype: 'spacer'
      }
      ,{
        iconMask: true
        ,iconCls: 'refresh'
        ,handler: function() {
          Ext.StoreMgr.get('headlinesStore').load();
          Ext.StoreMgr.get('calendarStore').load();
        }
      }]
    }];
    
    // create headlines list
    this.headlinesPanel = new bentonMobile.headlinesPanel({
      itemId: 'headlinesPanel'
      ,listeners: {
        scope: this
        ,headlineSelected: this.onHeadlineSelected
      }
    });
    
    // create detail view
    this.detailPanel = new bentonMobile.detailPanel({
      itemId: 'detailPanel'
      ,listeners: {
        scope: this
        ,list: this.onDetailList
        ,navigate: this.onDetailNavigate
      }
    });
    
    // create calendar panel
    this.calendarPanel = new bentonMobile.calendarPanel({
      itemId: 'calendarPanel'
    });
    
    // populate items config property with child items
    this.items = [
      this.headlinesPanel
      ,this.detailPanel
      ,this.calendarPanel
    ]
  
    // call parent class's function
    bentonMobile.Viewport.superclass.initComponent.apply(this, arguments);
  }
  
  ,onHeadlineSelected: function(headline) {
      this.setActiveItem('detailPanel', {type:'slide', direction:'left'});
      //Ext.getCmp('details').update(headline.data);
      this.detailPanel.loadHeadline(headline);
  }
  
  ,onDetailList: function() {
    this.setActiveItem('headlinesPanel', {type:'slide', direction:'right'});
  }
  
  ,onDetailNavigate: function(direction) {
    var selected = this.headlinesPanel.headlinesList.getSelectedRecords(), idx, headline;
    if (selected == -1) {
      selected = 0;
    } 
    if (direction == 'next') {
      idx = this.headlinesPanel.headlinesList.store.indexOf(selected[0]) + 1; //add one
    }
    else {
      idx = this.headlinesPanel.headlinesList.store.indexOf(selected[0]) - 1; //subtract one
    }

    headline = this.headlinesPanel.headlinesList.store.getAt((idx));
    //if there is another headline load it up, else go back to the list
    if (typeof(headline) == 'object') {
      this.headlinesPanel.headlinesList.getSelectionModel().select(idx);
      this.detailPanel.loadHeadline(headline);
      this.setActiveItem('detailPanel', {type:'slide', direction:'up'});
    }
    else {
      this.setActiveItem('headlinesPanel', {type:'slide', direction:'right'});
    }
  }  
});