// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require_tree .

window.addEventListener("scroll", function () {
    var header = document.getElementsByClassName('navbarcontainer')[0];
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function () {
    var header = document.getElementsByClassName('navbar')[0];
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function () {
    var header = document.getElementById('logo');
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function () {
    var header = document.getElementsByClassName('aboutme')[0];
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function () {
    var header = document.getElementsByClassName('aboutme2')[0];
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function () {
    var header = document.getElementsByClassName('aboutme3')[0];
    header.classList.toggle("sticky", window.scrollY > 0);
})