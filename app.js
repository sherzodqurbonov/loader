"use strict"
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    setInterval(function(){
        loader.style.opacity = '0';
        setTimeout(function(){
            loader.style.display = 'none';
        },2000)
    },3500);
})