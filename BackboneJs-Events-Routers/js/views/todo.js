/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 7/20/12
 * Time: 8:25 PM
 * To change this template use File | Settings | File Templates.
 */

define(['jquery','underscore','backbone','text!templates/todo.html'],
    function($,_,Backbone,TodoTemplate){

    var TodoView = Backbone.View.extend({

        template:_.template(TodoTemplate),

        initialize:function(){
            console.log("TodoView Initialized");
            this.render();
        },
        render:function(){
            console.log("TodoView is Rendering");
            console.log("TodoView got a TodoModel with content as "+ this.options.model.get("content"));

            $(this.el).html(this.template({model:this.options.model}));
        }
    });

    return TodoView;

});