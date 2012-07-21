/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 7/20/12
 * Time: 8:06 PM
 * To change this template use File | Settings | File Templates.
 */

define(['backbone'],function(Backbone){

    var TodoModel = Backbone.Model.extend({
        defaults:{
            content:'Empty Todo'
        },
        initialize:function(){
            console.log("Initialized Todo Model");

        }
    });

    return TodoModel;
});