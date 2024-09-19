// var elem1 = document.querySelector("#elemOne");
// var elem1Img = document.querySelector("#elemOne img");
// elem1.addEventListener("mousemove",function(data){
//     // console.log(data)
//     elem1Img.style.left = data.x + "px"
//     elem1Img.style.top = data.y + "px"
//     // elem1Img.style.opacity = 1;
// })
// elem1.addEventListener("mouseenter",function(){
//     // console.log(data)
//     // elem1Img.style.left = data.x + "px"
//     // elem1Img.style.top = data.y + "px"
//     elem1Img.style.opacity = 1;
// })
// elem1.addEventListener("mouseleave",function(){
//     // console.log(data)
//     // elem1Img.style.left = data.x + "px"
//     // elem1Img.style.top = data.y + "px"
//     elem1Img.style.opacity = 0;
// })

// or short method for selecting all.
var elem = document.querySelectorAll(".elem");
// console.log(elem)
elem.forEach(function(data){
    // console.log(data.childNodes[1])
    data.addEventListener("mouseenter",function(){
        data.childNodes[1].style.opacity = 1;
    })
    data.addEventListener("mouseleave",function(){
        data.childNodes[1].style.opacity = 0;
        
    })
    data.addEventListener("mousemove",function(datas){
        data.childNodes[1].style.left = datas.x + "px"
        // data.childNodes[1].style.top = datas.y + "px"
        
    })
})















// chat gpt code
// var elem = document.querySelectorAll(".elem");

// elem.forEach(function(data) {
//     var tooltip = data.childNodes[1]; // Assuming this is the tooltip image

//     data.addEventListener("mouseenter", function() {
//         tooltip.style.opacity = 1; // Show tooltip
//     });

//     data.addEventListener("mouseleave", function() {
//         tooltip.style.opacity = 0; // Hide tooltip
//     });

//     data.addEventListener("mousemove", function(event) {
//         // Calculate position relative to the element
//         var rect = data.getBoundingClientRect();
//         var offsetX = event.clientX - rect.left; // Mouse X relative to element
//         var offsetY = event.clientY - rect.top;  // Mouse Y relative to element

//         tooltip.style.left = offsetX + "px"; // Update tooltip position
//         tooltip.style.top = offsetY + "px";  // Update tooltip position
//     });
// });

