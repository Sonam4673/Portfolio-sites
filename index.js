
/**==typedjs==**/
var typingEffect = new Typed (".multitext",{
    strings: ["Full Stack Developer","Android App Developer","Graphics Designer","Blogger"],
    loop : true,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
 });
 /*==toggle icon navbar===*/
let meunIcon = document.querySelector('#meun-icon');
let navbar = document.querySelector('.navbar');
meunIcon.onclick = () => {
   meunIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
};
 
/*==scrollbar active link==*/
let sections = document.querySelectorAll('Section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec=> {
        let top=window.scrollY;
        let offset=sec.offsetTop -150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach(links => {
                links.classList.remove('active');
               document.querySelector('header nav a[href*=' + id+']').classList.add('active');
           });
        };

    });
    /*==sticky navbar==*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    /*==remove tooggle icon and  navbar when click link(scrool)==*/
    meunIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
/*==contact from==*/
document.getElementById("submit").addEventListener('click', function(e){
    set(ref(db, 'user/' + document.getElementById("name").value),
    {
     name: document.getElementById("name").value,
     email: document.getElementById("email").value,
     number: document.getElementById("number").value,
     subject: document.getElementById("subject").value
     });
     alert("Login success!");
})















/*==firebase==*/
