
function newpage() {
   window.open('resume.html','_self')
}

function loadJSON(file,callback) {
var rawFile= new XMLHttpRequest();
rawFile.overrideMimeType("application/json");
rawFile.open("GET",file,true);
rawFile.onreadystatechange=function() {
  if (rawFile.readyState===4  && rawFile.status=="200") {
    callback(rawFile.responseText);
  }
}
rawFile.send();
}

loadJSON("resume.json", function(text) {
  var data=JSON.parse(text);
  // console.log(data);
console.log(data);

});

var main=document.getElementsById('id');
var left=document.getElementsById('leftDiv');
var right=document.getElementsById('rightDiv');

function basic(basics) {
 var lc1=document.createElement("div");
lc1.classList.add("child")
var image=document.createElement("img");
image.classList.add;
image.src=basics.picture;
var head1=document.createElement("h1");
head1.textContent=basics.name;
var head3=document.createElement("h3");
head3.textContent=basics.label;
lc1.appendChild(image1);
lc1.appendChild(head1);
lc1.appendChild(head3);
left.appendChild(lc1)
var hr1=document.createElement("h1");
head1.textContent=basics.name;
var lc2=document.createElement("div");
lc2.classList.add("child2");
var head=document.createElement("h4");
head4.textContent=basics.email;
var head=document.createElement("h4");
head.textContent=basics.phone;
lc2.appendChild(head4);
lc2.appendChild(head3);
lc2

}
