const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["light green","green","red","pink","orange","blue","slateblue"];
document.querySelector("button").addEventListener('click',function(){
 const colorIndex=parseInt(Math.random()*color.length);
  body.style.backgroundColor=color[colorIndex];
});