/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 7/20/12
 * Time: 10:59 AM
 * To change this template use File | Settings | File Templates.
 */
define(['jquery','underscore','backbone','text!templates/todo.html'],function($,_,Backbone,TodoTemplate){

    var TodoView = Backbone.View.extend({
        template:_.template(TodoTemplate),
        initialize:function(){
            console.log("initialized TodoView");
            this.render();
        },
        render:function(){
            console.log("Rendering TodoView");

            $(this.el).html(this.template({model:this.options.model}));
        }
    });

    return TodoView;

});