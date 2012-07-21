/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 7/20/12
 * Time: 7:56 PM
 * To change this template use File | Settings | File Templates.
 */


require.config({
    paths:{
        jquery:'libs/jquery/jquery-min',
        underscore:'libs/underscore/underscore-min',
        backbone:'libs/backbone/backbone-optamd3-min',
        text:'libs/require/text'
    }
});

require(['views/app'],function(AppView){

    var appView = new AppView;

});