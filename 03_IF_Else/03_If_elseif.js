let isuserloggedin = true;
let userRole = "<Mubbu>";

if (isuserloggedin) {
    if (userRole === "Admin") {
        console.log("Logged as Admin user");
    }
    else if (userRole === "editor") {
        console.log("logged in as Editor");
    }
    else {
        console.log("logged in as a Guest");
    }

} else {

    console.log("your are not logged in")
}