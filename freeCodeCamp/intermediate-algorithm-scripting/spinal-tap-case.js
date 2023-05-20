function spinalCase(str) {
    // Create a variable for the white space and underscores.
    let regex = /\s+|_+/g;
    console.log(str)
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    console.log(str)

    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
}

// test here
// spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap")
