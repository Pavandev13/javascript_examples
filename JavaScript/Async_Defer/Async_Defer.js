//async and defer are boolean attributes which is used along with script tag to load the external scripts efficiently in our webpage.

//when you load a webpage , there are 2 major things happen in the browser
// 1.html parsing 
// 2.loading of the scripts

// loading the scripts contains 2 parts 
// 1.fetching the script from the network
// 2.Executing the script line by line


// Normal Script:

{/* <script src=""></script>

HTML parsing goes on as sonn as script tag is encountered. THe Scripts are fetched from the network
and then eexecuted and after that html parsing continues. */}

// async:

// <script async src=""></script>

// If we use async attribute, the html parsing goes on , and script tags are fetched  parallely. 
// And as soon as scripts are avaialable , Scripts are executed. After then html parsing continues.

//Defer:

// <script defer src=""></script>

// If we use async attribute, the html parsing goes on , and script tags are fetched  parallely. 
// And only executes once the html parsing completes

// Defer: Maintains the order of the scripts 

