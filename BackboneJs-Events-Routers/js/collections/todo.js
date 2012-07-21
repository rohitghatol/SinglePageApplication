/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 7/20/12
 * Time: 8:43 PM
 * To change this template use File | Settings | File Templates.
 */

define(['backbone','models/todo'],function(Backbone,TodoModel){

    var TodoCollection = Backbone.Collection.extend({

        model:TodoModel,

        url:'json/todos.json',

        parse:function(data){
            return data.result;
        }
    });

    return TodoCollection;
});