name = "Nick";
var name;
// console.log(name);
// after step 3: I expected "Nick" to be logged because vars are hoisted: brought to the top of the document on load, so it actually is declared before assignment and logging.
setName();
function setName() {
    var name = 'Covalence';
    console.log(name);
}
// after step : I expect "Nick" to be logged because it is a globally scoped variable and takes precedence over the locally scoped variable within the function.