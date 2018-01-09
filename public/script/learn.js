/*
animate One circle
function animCircle() {
    document.querySelector('.circle').animate([
            //keyframes
            {transform: 'scale(1)' },
            {transform: 'scale(1.2)' },
            {transform: 'scale(1)' },
    ],{
            //timing option
            duration: 3000,
            iterations: Infinity
    });
}

exemple of how to get and change all same elements with js
document.querySelectorAll('.circle').forEach(function(thing, index) {
    console.log(index);
    thing.innerHTML = "hello";
})*/
/**
 *
 */
// old way
// var doSomethinf = function(foo) {
//     foo.toUppeCase()
// }
//
// New / smarter / way  to write js
// const doSomething = (foo) => {
//
// }
/**
 * Joining strings together + variable
 */

 const name = 'lawrence'
 const age = 26
const profile = `${name} is ${age}`

old way
{transform: 'rotate('+ random +'deg)'},
new way
{transform: `rotate(${random}deg)`},
