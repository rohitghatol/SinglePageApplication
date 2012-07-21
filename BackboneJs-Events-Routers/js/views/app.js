/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 7/20/12
 * Time: 8:17 PM
 * To change this template use File | Settings | File Templates.
 */

define(['jquery','underscore','backbone','views/todo','models/todo','collections/todo','views/aboutus','text!templates/app.html'],
    function($,_,Backbone,TodoView,TodoModel,TodoCollection,AboutUsView,AppTemplate){

    var AppView = Backbone.View.extend({

        el:$("#placeholder"),

        template:_.template(AppTemplate),
        events:{
            'click .tab':'tabSelected'

        },
        initialize:function(){

            console.log("App View is initialized");

            this.el.html(this.template());

            //Create a router to handle change in Url
            var AppRouter = Backbone.Router.extend({
                routes:{
                    "app-nav":"loadApp",
                    "aboutus-nav":"loadAboutus"
                },
                loadApp:function(){
                    console.log("Showing App");
                    $("#app").show();
                    $("#aboutus").hide();
                },
                loadAboutus:function(){
                    console.log("Showing Aboutus");
                    $("#app").hide();
                    $("#aboutus").show();

                }
            });

            var router = new AppRouter();

            //Initialize the History Management
            Backbone.history.start();

            //Show App and Hide AboutUs
            $("#app").show();
            $("#aboutus").hide();

            //Put AboutUs View in the right place
            var aboutUsView = new AboutUsView();
            this.el.find("#aboutus").html(aboutUsView.el);

            //Start fetching of Todos
            this.todos = new TodoCollection();
            this.todos.bind('all',this.render,this);
            this.todos.fetch();
        },

        tabSelected:function(event){
            console.log("loadApp "+event.target.id);
            window.location.href='http://localhost/~rohit/Backbone-Demo/#'+event.target.id;
        },


        render: function(){
            console.log("Data is fetched") ;
            //Put Todo Collections in the right place
            var elem = this.el.find("#app");
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