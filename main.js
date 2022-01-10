const btn =document.querySelector('#toggle-btn');

btn.addEventListener('click', function(){
    document.getElementById("sidebar").classList.toggle("active");
})