/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 7/19/12
 * Time: 3:52 PM
 * To change this template use File | Settings | File Templates.
 */

define(['backbone'],function(Backbone){
   var TodoModel = Backbone.Model.extend({
       default:{
           content:"Empty Todo"
       },
       initialize:function(){
           console.log("initialized TodoModel");
       }
   });

    return TodoModel;

});