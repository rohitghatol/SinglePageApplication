/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 7/20/12
 * Time: 11:57 AM
 * To change this template use File | Settings | File Templates.
 */

define(['jquery','backbone','views/todo','models/todo','collections/todo'],
    function($,Backbone,TodoView, TodoModel,TodoCollection){

    var AppView = Backbone.View.extend({

        el:$("#placeholder"),

        initialize:function(){
            console.log("initialized AppView")
            this.todos = new TodoCollection();
            this.todos.bind('all',this.render,this);
            this.todos.fetch();

        },
        render:function(){

            console.log("fetched content");
            console.log("rendered AppView");
            var elem = this.el;
            elem.html("");
            this.todos.each(function(model){
                console.log(model.get("content"));
                var todoView = new TodoView({model:model});
                elem.append(todoView.el);
            });
//            var todoModel = new TodoModel({content:"New Content"});
//            console.dir(todoModel);
//            var todoView = new TodoView({model:todoModel});
//
//            this.el.html(todoView.el);


        }

    });

    return AppView
});