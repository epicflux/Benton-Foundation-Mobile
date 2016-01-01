Ext.define('bentonMobile.index', {
  extend: 'Ext.Panel'
  ,layout: 'card'
  ,config : {
    items : [
      {
        xtype : 'navigationbar'
        ,docked : 'top'
        ,items : [
          {
            xtype: 'button'
            ,ui: 'home'
            ,text: 'Headlines'
            ,scope: this
            ,handler: function() {
              this.setActiveItem(1);
            }
          }
        ]
      }
      ,list
    ]
  }
});