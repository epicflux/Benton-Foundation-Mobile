Ext.define('bentonMobile.view.HeadlinesListItem', {
    extend: 'Ext.dataview.component.DataItem',
    xtype: 'headlineslistitem',
    config: {
        cls: 'headlines-list-item',
        dataMap: {
            getTitle: {
                setHtml: 'title'
            }
        },
        title: {
            cls: 'x-title'
        },
        layout: {
            type: 'hbox',
            align: 'left'
        },
        tpl: '<p>Title: {title}</p>',
    },
   /**
     * Called when you set the {@link #name} configuration.
     *
     * Uses Ext.factory to return a proper instance using the configuration passed, the
     * default component, and the existing instance (if it exists).
     *
     * This should *never* be called manually. It will be called when you call {@link #setName}.
     * @private
     */
    applyTitle: function(config) {
        return Ext.factory(config, Ext.Component, this.getTitle());
    },

    /**
     * Called when you set the {@link #name} configuration, and is passed both the new value
     * (from applyName) and the old value.
     *
     */
    updateTitle: function(newTitle, oldTitle) {
        if (newTitle) {
            this.add(newTitle);
        }

        if (oldTitle) {
            this.remove(oldTitle);
        }
    },
});