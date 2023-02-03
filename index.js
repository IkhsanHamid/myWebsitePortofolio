// toggle class acitve
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = function () {
  navbarNav.classList.toggle("active");
};
// klik diluar sidebar untuk menghilangkan hamburger menu
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target)&&!navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }    
});