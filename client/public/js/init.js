/**
 * Created by Brendan on 3/13/2018.
 */
$(document).ready(function(){
    $('.collapsible').collapsible();
    $('select').material_select();
    console.log("init");
    let h = $(document).height();
    if(h > $('.ResponsiveDrawer-drawerPaper-5').height()){
        $('.MuiDrawer-docked-105').height(h);
        $('.ResponsiveDrawer-root-1').height(h);
    }
});