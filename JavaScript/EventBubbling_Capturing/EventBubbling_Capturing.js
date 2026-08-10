// EventBubbling and EventCapturing are the 2 ways of Event Propogation in DOM tree .


// ex:

// div # grandParent----onClickGrandParent()
// div # parent---------onClickParent()
// div # child ---------onClickChild()


//  Event Bubbling - Event bubble up from where it is clicked
//  Capturing phase – the event goes down to the element.

//  Event Capturing is also known as Event Trickling.

//  addEventListner(event,callback,useCapture)

 //UseCapture is a Boolean      
//  If it’s false (default) or not passing argument, then the handler is set on the bubbling phase.
// If it’s true, then the handler is set on the capturing phase.

// document.querySelector('#grandParent')
// .addEventListener('click',() => { 
//     console.log('grandparent called')
// })
// document.querySelector('#parent')
// .addEventListener('click',() => {
//     console.log('parent called')
// })
// document.querySelector('#child')
// .addEventListener('click',() => {
//     console.log('child clicked')
// })



// document.querySelector('#grandParent')
// .addEventListener('click',() => { 
//     console.log('grandparent called')
// },true)
// document.querySelector('#parent')
// .addEventListener('click',() => {
//     console.log('parent called')
// },true)
// document.querySelector('#child')
// .addEventListener('click',() => {
//     console.log('child clicked')
// },true)


// document.querySelector('#grandParent')
// .addEventListener('click',() => { 
//     console.log('grandparent called')
// },true)//capturing
// document.querySelector('#parent')
// .addEventListener('click',() => {
//     console.log('parent called')
// },false)//bubbling
// document.querySelector('#child')
// .addEventListener('click',() => {
//     console.log('child clicked')
// },true)//capturing

//  Note : Always Capturing Phase is executed first
//                  Then Bubbling Phase
// means
//                  Event propagation always starts from
//                  Capturing Phase and then move  to Bubbling Phase


document.querySelector('#grandParent')
.addEventListener('click',() => { 
    console.log('grandparent called')
},false)//bubbling
document.querySelector('#parent')
.addEventListener('click',(e) => {
    console.log('parent called')
    e.stopPropagation();
},false)//bubbling
document.querySelector('#child')
.addEventListener('click',() => {
    console.log('child clicked')
},false)//bubbling

//stopPropogation method is used to stop the proppogation of the event

document.querySelector('#grandParent')
.addEventListener('click',() => { 
    console.log('grandparent called')
},true)
document.querySelector('#parent')
.addEventListener('click',(e) => {
    console.log('parent called')
    e.stopPropagation();
},true)
document.querySelector('#child')
.addEventListener('click',() => {
    console.log('child clicked')
},true)
