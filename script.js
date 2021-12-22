$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Science", "Business", "Self-development", "Classic", "Music"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Science", "Business", "Self-development", "Classic", "Music"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

function switchForm(className, e) {
    e.preventDefault();
    const allForm = document.querySelectorAll('form');
    const form = document.querySelector(`form.${className}`);

    allForm.forEach(item=> {
        item.classList.remove('active');
    })
    form.classList.add('active');
}


const registerPassword = document.querySelector('form.register #password');
const registerConfirmPassword = document.querySelector('form.register #confirm-pass');

registerPassword.addEventListener('input', function () {
    registerConfirmPassword.pattern = `${this.value}`;
})

//sign up 
function signup(){
    event.preventDefault();
    //console.log('working');

    var em = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var pas = document.getElementById('confirm-pass').value;

    var user = {
        email: em,
        password: pass,
        confirm_p: pas, 
    };

    var json = JSON.stringify(user);
    localStorage.setItem(user,json);
    console.log('user added');

}

//log in

function loginFunc(){
    event.preventDefault();
    //console.log(123);


    var email = document.getElementById('email1').value;
    var pass = document.getElementById('password1').value;


    var user = localStorage.getItem(user);
    var data = JSON.parse(user);
    console.log(data);


    if(user == null){
       alert('logged in')    
   } 
    else if(email == data.email1 && pass == data.password1){
        result.innerHTML = 'logged in';
    } 
    else {
        result.innerHTML = 'wrong password';
    }

}