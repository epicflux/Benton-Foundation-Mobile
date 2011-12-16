Ext.ns('bentonMobile');

bentonMobile.headlinesPanel = Ext.extend(Ext.Panel, {

  layout: 'fit'
  
  ,initComponent: function() {

    // create headlines store
    this.headlinesStore = new Ext.data.Store({
      model: 'ListItem'
      ,autoLoad: true
      ,storeId: 'headlinesStore'
    });
    
    this.headlinesList = new Ext.List({
      xtype: 'list'
      ,store: this.headlinesStore
      ,scroll: 'vertical'
      ,itemTpl: '<div>{title}</div>'
      ,onItemDisclosure: false
      ,listeners: {
        scope: this
        ,itemtap: function(list, index) {
            var headline = list.store.getAt(index);
            this.fireEvent('headlineSelected', headline);        
          }
      }
      ,plugins: [new Ext.ux.touch.ListOptions({
         enableSoundEffects: true
         ,allowMultiple: true
         ,hideOnScroll: true
         ,menuOptions: [{
           id: 'benton-org-view',
           cls: 'benton-view',
           enabled: true
         }
         ,{
           id: 'source-link-view',
           cls: 'source-view'
         }]
      })]
    });

    this.headlinesList.on('menuoptiontap', function(data, record){
      if (data.id == 'benton-org-view') {
        Ext.Msg.confirm('View summary on Benton.org', ' This will open in a browser window, proceed?', function(buttonId, value, opt) { if (buttonId == 'yes') { window.open(record.data.path, '_blank') } });
      }
      else if (data.id == 'source-link-view') {
        Ext.Msg.confirm('View the source link', ' This will open in a browser window, proceed?', function(buttonId, value, opt) { if (buttonId == 'yes') { window.open(record.data.link, '_blank') } });
      }
    });

    this.items = [this.headlinesList];

    bentonMobile.headlinesPanel.superclass.initComponent.apply(this, arguments);
  }
});