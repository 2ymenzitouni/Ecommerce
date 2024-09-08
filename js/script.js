var nav_item_ul = document.querySelector(".nav-item .container ul")
var close_nav_item_ul_icon = document.querySelector(".close-icon")
var open_nav_item_ul_icon = document.querySelector(".menu-bars")
close_nav_item_ul_icon.addEventListener("click",hide)
open_nav_item_ul_icon.addEventListener("click",show)
function hide(){
    var ul_left_val = nav_item_ul.style.left
    nav_item_ul.style.left = "-400px"
}

function show(){
        nav_item_ul.style.left = 0
}
// *********************************
