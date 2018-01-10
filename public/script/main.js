function animMarque () {
    const title = "FIFTY Music Festival — November 10–12, Desert Valley";
    // array is a list of thing
    //['rick', 'lawrence', 1, false, true, {name:'lawrence', location:'montreal'}]
    // create an array with 50 item and fill each of them with the title
    const marqueeText = new Array(50).fill(title).join(' - ');
    //get span inside the marquee selector
    const marquee = document.querySelector('.marquee span');
    //replace content with the text of the array
    marquee.innerHTML = marqueeText;

    console.log(marquee);
}

animMarque ();

function animCircle() {
    /* get all circles */
    const circles = document.querySelectorAll('.circle');
    // in here we get access to each one as 'circle'
    //index == array of which we are working with
    circles.forEach((circle, index) => {
        console.log(circle)
        circle.animate([
                //keyframes
                {transform: 'scale(1)' },
                {transform: 'scale(1.2)' },
                {transform: 'scale(1)' },
        ],{
                //timing option
                //here we use the index to create a staggered animation delay
                delay: 300 * index,
                duration: 3000,
                iterations: Infinity
        });
    });

}

animCircle();

function randomNb(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function animSquiggle() {
    /* get all circles */
    const squiggles = document.querySelectorAll('.squiggle');
    // in here we get access to each one as 'circle'
    //index == array of which we are working with
    squiggles.forEach((squiggle, index) => {

        const random = randomNb(0, 45);
        console.log(random)
        squiggle.animate([
                //keyframes
                // join our random number into our rotate property (string + variable)
                {transform: 'rotate(0)' },
                {transform: `rotate(${random}deg)`},
                {transform: 'rotate(0)' },
        ],{
                //timing option
                //here we use the index to create a staggered animation delay
                delay: 300 * index,
                duration: 5000,
                iterations: Infinity
        });
    });

}

animSquiggle();


//here we want to detect our section enter the viewport
//when it does add a class' viewport', and
//when it's exists we want to remove it
inView('.section')
    .on('enter', section =>{
        section.classList.add('in-viewport')
    })
    .on('exit', section => {
        section.classList.remove('in-viewport')
    });

//here we set the class to add only on we have scroll 0.5 of the viewport
inView.threshold(0.5);


 // we want to select all sections and loop
 // in each section grad artist & shapes
 // for both add transition delay effects
 // make sure our shapes only fade in after our artists
 const sections = document.querySelectorAll('.section');
 sections.forEach((section, index) => {
        // find element inside section vs inside the page
        const artists = section.querySelectorAll('.lineup li');
        const shapes = section.querySelectorAll('.shape');
        console.log(artists, shapes);
        artists.forEach((artist, index) => {
            const delay = index * 100
            artist.style.transitionDelay = `${delay}ms`;
        });
        shapes.forEach((shape, index) => {
            const delay = (artists.lengh + index) * 100
            shape.style.transitionDelay = delay + 'ms';
        });
});
//on click js-scroll-link run Function
// stop link jumping straight to our sections
// find out href attribute grab that elements
// then scroll to it using scrollIntoView

 const scrollLinks = document.querySelectorAll('.js-scroll')
 scrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        //using event keyword = get a snapshot on what happen
        console.log(event)

        //will block the natural browser behavior of jumping to another link
        event.preventDefault();
        //get href attribute of the link
        const href = link.getAttribute('href')
        //use href to scroll smoothly into it
        document.querySelector(href).scrollIntoView({
            behavior:'smooth'
        });
    });
});
