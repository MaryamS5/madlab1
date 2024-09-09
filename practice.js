function Task()
{
let fullName =" Maryam";
console.log(fullName);

}
Task();


function hello() {
    console.log("My name is Maryam");
}

// Call the hello function after a 3-second delay (3000 milliseconds)
setTimeout(hello, 3000);


// new code
function sleep() {
    console.log("I love my mom");
    
    function tree(a, callback) {
        console.log("I love my sleep");
        // You can call the callback here if needed
        callback();
    }
    
    // Call the tree function inside sleep
    tree("magic", function() {
        console.log("This is a callback function");
    });
}

// Call the sleep function
sleep();
//maryam sohail
