/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 7/20/12
 * Time: 8:25 PM
 * To change this template use File | Settings | File Templates.
 */

define(['jquery','underscore','backbone','text!templates/aboutus.html'],
    function($,_,Backbone,AboutUsTemplate){

    var AboutUsView = Backbone.View.extend({

        template:_.template(AboutUsTemplate),

        initialize:function(){
            console.log("AboutUsView Initialized");
            this.render();
        },
        render:function(){
            console.log("AboutUsView is Rendering");


            $(this.el).html(this.template());
        }
    });

    return AboutUsView;

});