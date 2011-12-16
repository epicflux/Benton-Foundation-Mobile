Ext.ns('bentonMobile');

bentonMobile.detailPanel = Ext.extend(Ext.Panel, {

  layout: 'fit'

  ,initComponent: function() {

    // configure layout items
    this.detailsBack = new Ext.TabBar({
      dock: 'top'
      ,xtype: 'toolbar'
      ,ui: 'dark'
      ,items: [{
        xtype: 'button'
        ,ui: 'back'
        ,text: 'Previous'
        ,scope: this
        ,handler: function() {
          this.fireEvent('navigate', 'prev');
        }
      }
      ,{xtype: 'spacer'}
      ,{
        xtype: 'button'
        ,ui: 'action'
        ,text: 'List'
        ,scope: this
        ,handler: function() {
          this.fireEvent('list');
        }
      }
            ,{xtype: 'spacer'}
      ,{
        xtype: 'button'
        ,ui: 'forward'
        ,text: '&nbsp;&nbsp;Next&nbsp;&nbsp;'
        ,scope: this
        ,handler: function() {
          this.fireEvent('navigate', 'next');
        }
      }]
    });
    
     this.detailsLinks = new Ext.TabBar({
      dock: 'bottom'
      ,xtype: 'toolbar'
      ,ui: 'dark'
      ,layout: {pack: 'center'}
      ,id: 'detailsLinks'
            ,items: [{
        xtype: 'button'
        ,text: 'View on Benton.org'
          ,iconCls: 'benton-view'
        ,scope: this
      }
      ,{
        xtype: 'button'
        ,text: 'View on Source'
          ,iconCls: 'source-view'
        ,scope: this
    }]
    });

    this.dockedItems = [this.detailsBack, this.detailsLinks];
    
    // create details object
    this.details = new Ext.Component({
      id: 'details'
      ,cls: 'headlinesPanel'
      ,styleHtmlContent: true
      ,scroll: 'vertical'
      ,tpl: [
        '<tpl for=".">',
          '<div class="headline">',
              '<div class="headlineContent">',
                '<div class="headlineTitle">{title}</div>',
                '<p class="headlineDate">{field_publish_date_value}</p>',
                '<div class="headlineTeaser">{teaser}</div>',
              '</div>',
          '</div>',
        '</tpl>'
      ]
      ,listeners: {
        click: {
            element : 'el',
          fn : function(event, el) {
            if (el.href) {
                        event.preventDefault();
                        window.open(el.href, '_blank');
            }
          }
        }
      }
    });
    
    this.items = [this.details];
  
    bentonMobile.detailPanel.superclass.initComponent.apply(this, arguments);
  }
  
  ,loadHeadline: function(headline) {
    this.details.update(headline.data);
    var tb = this.getDockedComponent('detailsLinks');
    tb.removeAll(true);
    var bentonButton = new Ext.Button({
      xtype: 'button'
      ,ui: 'dark'
      ,iconCls: 'benton-view'
      ,scope: this
      ,handler: function() {
          window.open(headline.data.path, '_blank');
        }
    });
    tb.add(bentonButton);
    if (headline.data.source != -1 && headline.data.source != 'Benton Foundation') {
      var sourceButton = new Ext.Button({
      xtype: 'button'
      ,ui: 'dark'
      ,text: headline.data.source
      ,iconCls: 'source-view'
      ,scope: this
      ,handler: function() {
          window.open(headline.data.link, '_blank');
        }
      });
      tb.add(sourceButton);
    }
    tb.doLayout();
  }
});