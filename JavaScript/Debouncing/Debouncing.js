let counter = 0;
const getData = () => {
    console.log('fetching Data..........', counter++)
}

function debounce(fn, d) {
    let timer;
    return function () {
        let context = this;
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            getData.apply(context, arguments)
        }, d)
    }
}



const betterFunction = debounce(getData(), 300)

//     Example: Imagine a search bar where a function fetches data and updates the frontend on each keypress.
//     We don't want this function to be invoked for every single keystroke. 
//     Instead, we want it to trigger only after the user stops typing for at least 300 milliseconds.
//      Debouncing achieves this by waiting for a pause in the user input before executing the function, 
//      reducing unnecessary API calls and improving performance.