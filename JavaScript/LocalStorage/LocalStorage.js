//there are 2 mechanisms to store data in webbrowser
// 1.Session Storage:
//     when we store data in session storage that means the data is persistant for that particular session.

//     Suppose a user is visiting a web app . As soon as he visits the web app a session is started.
//     And the data which is stored in the session storage is only persistant till he is on the web browser window.
//     As soon as he closes the window or the tab of the browser, the data is lost .

//     But it is very useful than Cookies . Unlike Cookies Session Storage is not sent to the server while making
//     the network request calls . And this Session storage data has larger capacity to hold .

//     In cookies we can store --- 4000 bytes of data.
//     In Session Storage we can storage ---- atleast min of 5mb of data.

// 2. Local Storage: It is Same as the Session Storage.But the advantage over here is it doesnt comes with an expiry.
//    Suppose user closes the window,or tab or shutdown the system and comeback to same browser, data is still persistant
//     in that browser.

//     Local Storage has the highest memory Capacity when compared to Session Storage or Cookies. 

//     Getting a data from local storage is very fast compared to making a network call and getting the data. 


// Storage ApI will follow the same Origin Policy beeacuse of Security Reasons.

// The Origin Consists of 3 things.
// 1. Protocol: http or https
// 2. Host or Domain: ex:flipcer.com,paytm.com
// 3.Port: 8080 or 8081 (where the app is hoisted)


// when the host changes or Protocol changes or Port changes and the localStorage of each and every origin is different
// in the browser. 

// local storage is stored in window Object of the browser. 

localStorage.setItem("hello","world")
localStorage.setItem("hello","world2")
localStorage.setItem("hello1","world2")


// key                  value

// hello                world2
// hello1               world2

localStorage.getItem("hello") // 'world2'

localStorage.removeItem("hello1") //It will remove particular item from local storage.

// key                  value

// hello                world2

localStorage.clear() // It will clear everything from local storage


// LocalStorage accepts strings but we want to store some object



const user= {userName:'pavan'}
localStorage.setItem("user",user)

// key      value
// user    [Object Object]

// here user Object is converting to string.
// String(user) ------- [Object Object]



// If we want to store some object into local storage what will do JSON.stringify which can stringify the object.
localStorage.setItem("user",JSON.stringify(user))

// key      value
// user     {"user":"pavan"}

localStorage.getItem("user") //'{"user":"pavan"}'


JSON.parse(localStorage.getItem("user")) //{user: 'pavan'}




