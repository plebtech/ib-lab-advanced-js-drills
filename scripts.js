name = 'Nick';
var name;
// console.log(name);
// after step 3: I expected "Nick" to be logged because vars are hoisted: brought to the top of the document on load, so it actually is declared before assignment and logging.
setName();
function setName() {
    var name = 'Covalence';
    console.log(name);
}
// after step 8: I expect "Nick" to be logged because it is a globally scoped variable and takes precedence over the locally scoped variable within the function.
console.log('first text');
let avg = avgPair(2, 4);
console.log('second text');
function avgPair(a, b) {
    console.log('third text');
    return (a + b) / 2;
};
// after step 11: I expect the order to be first, third, second. This is because the function (which contains 'third text') is invoked before the 'second text' log.

let fruits = ['pear', 'strawberry', 'banana'];
// let favFruit;
function sayFirstFruit() {
    let favFruit = fruits[1];
    favFruit = fruits[1];
    console.log(fruits[0]);
    function sayFavFruit() {
        console.log(favFruit);
        let leastFav;
        leastFav = fruits[0];
    }
    // console.log(leastFav);
    sayFavFruit();
}

// sayFirstFruit();

sayFirstFruit();
// sayFavFruit();


sayHello();
function sayHello() {
    let name = "Nick";
    console.log("Hello " + name);
}

var newFunction = function() {
    alert("Does it appear?");
}
newFunction();