// Define a function named 'greet' that takes a 'name' parameter of type string and logs a greeting message.
function greet(name: string = "user") {
    // Log a greeting message to the console, using string interpolation to include the provided 'name'.
    console.log(`Hello ${name}!`);
}

// Call the 'greet' function with a name argument.
// Note: You need to provide a string argument when calling 'greet' since it expects a string parameter.
greet("Sir Okasha");
