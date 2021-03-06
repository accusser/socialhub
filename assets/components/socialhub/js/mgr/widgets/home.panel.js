SocialHub.panel.Home = function(config) {
    config = config || {};
    Ext.apply(config,{
        border: false
        ,baseCls: 'modx-formpanel'
        ,cls: 'container'
        ,items: [{
            html: '<h2>'+_('socialhub')+'</h2>'
            ,border: false
            ,cls: 'modx-page-header'
        },{
            xtype: 'modx-tabs'
            ,defaults: { border: false ,autoHeight: true }
            ,border: true
            ,activeItem: 0
            ,hideMode: 'offsets'
            ,items: [{
                title: _('socialhub.item.items')
                ,items: [{
                    html: '<p>'+_('socialhub.item.intro_msg')+'</p>' + InstaAuth
                    ,border: false
                    ,bodyCssClass: 'panel-desc'
                },{
                    xtype: 'modx-vtabs'
                    ,items:[{
                        title: 'Facebook'
                        ,items:[{
                            xtype: 'socialhub-grid-items'
                            ,source: 'facebook'
                            ,id: 'facebook'
                            ,preventRender: true
                            ,cls: 'main-wrapper'
                        }]
                    }, {
                        title: 'Instagram'
                        ,items:[{
                            xtype: 'socialhub-grid-items'
                            ,source: 'instagram'
                            ,id: 'insta'
                            ,preventRender: true
                            ,cls: 'main-wrapper'
                        }]
                    },{
                        title: 'Twitter'
                        ,items:[{
                            xtype: 'socialhub-grid-items'
                            ,source: 'twitter'
                            ,id: 'twitter'
                            ,preventRender: true
                            ,cls: 'main-wrapper'
                        }]
                    },{
                        title: 'Youtube'
                        ,items:[{
                            xtype: 'socialhub-grid-items'
                            ,source: 'youtube'
                            ,id: 'youtube'
                            ,preventRender: true
                            ,cls: 'main-wrapper'
                        }]
                    }
                    ]
                }]

            }]
        }]
    });
    SocialHub.panel.Home.superclass.constructor.call(this,config);
};
Ext.extend(SocialHub.panel.Home,MODx.Panel);
Ext.reg('socialhub-panel-home',SocialHub.panel.Home);