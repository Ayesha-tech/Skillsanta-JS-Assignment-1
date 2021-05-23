//Write a Javascript program to pass 'JavaScript function' as a parameter

function greet() {
    return 'Good Morning !  ';
}

// passing function greet() as a parameter
function name(user, func)
{

    // accessing passed function
    const message = func();

    document.write(`${message} ${user}`);
}


name(prompt("Enter your name"), greet);