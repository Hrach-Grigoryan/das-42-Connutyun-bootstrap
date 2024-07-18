'use strict'

var but = document.getElementById("btn1") 
 
 
function myfun() { 
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop  > 20) { 
        but.style.display = 'block'; 
    } else { 
        but.style.display = 'none'; 
    } 
} 
 


window.onscroll = function(){ 
    myfun() 
} 
 
function scrolltop() { 
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

var mybut = document.getElementById("mybit")

function myfunction1(){

    mybut.style.background = '#FF5722'
}

function myfunction2(){
    mybut.style.background = 'rgb(40, 40, 40)'
}



var mybut2 = document.getElementById('mybut2')

function myfunction3 (){
    mybut2.style.background = '#FF5722'
}
function myfunction4 (){
    mybut2.style.background = 'rgb(40, 40, 40)'
}

var mybut3 = document.getElementById('mybut3')

function myfunction5 (){
    mybut3.style.background = '#FF5722'
}

function myfunction6 (){
    mybut3.style.background = 'rgb(40, 40, 40)'
}