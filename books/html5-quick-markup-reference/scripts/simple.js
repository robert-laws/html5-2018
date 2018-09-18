var item = document.getElementById("main-heading");
item.style.color = "#F00";

var highlights = document.getElementsByClassName('top-highlight');

for(var i = 0; i < highlights.length; i++) {
  highlights.item(i).style.color = "green";
}

var ids = document.getElementsByTagName("section");
for(var i = 0; i < ids.length; i++){
  if(parseInt(ids.item(i).dataset.id) > 2) {
    ids.item(i).style.color = "crimson";
  }
}