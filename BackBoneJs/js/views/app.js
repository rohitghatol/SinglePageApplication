/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 7/20/12
 * Time: 8:17 PM
 * To change this template use File | Settings | File Templates.
 */

define(['jquery','backbone','views/todo','models/todo','collections/todo'],
    function($,Backbone,TodoView,TodoModel,TodoCollection){

    var AppView = Backbone.View.extend({

        el:$("#placeholder"),

        initialize:function(){
            console.log("App View is initialized");
            this.todos = new TodoCollection();
            this.todos.bind('all',this.render,this);
            this.todos.fetch();
        },

        render: function(){
            console.log("Data is fetched") ;
            var elem = this.el;
            elem.html("");
            this.todos.each(function(model){
               console.log(model.get("content"));

               var todoView = new TodoView({model:model});

               elem.append(todoView.el);

            });
        }
    })

    return AppView;

});