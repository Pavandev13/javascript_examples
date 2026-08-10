//Event Delegation states that instead of adding event handlers to each and every child elements or the html elements individually,
// we should rather attach event handlers to parent of these elements.



// document.querySelector('#category')
//         .addEventListener('click',(e) => {
//                 // console.log(e.target.id,'category')
//                 if(e.target.tagName === "LI") {
//  window.location.href = '/' + e.target.id
//                 }
//         })

// Behaviour Pattern acheiving through event delegation

document.querySelector('#form')
        .addEventListener('keyup',(e) => {
            console.log(e)
            if(e.target.dataset.uppercase != undefined){
                e.target.value = e.target.value.toUpperCase();
            }
        })

//         Benefits of event delegation:
// 1) improves memory space
// 2) mitigates risk of performance bottle neck
// 3) Dom manipulation
// 4) when elements get added dynamically, the process of adding events is slow
// Limitations:
// 1) All the events are not bubbled up, some events like blur, focus,resize are not bubbled up
// 2) if e.stopPropogation is used in child, then events are not bubbled up