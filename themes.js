function swap(sheet) {
  document.getElementById("style").setAttribute("href", sheet);


const titles = 5;
const paragraphs = 466;


setTimeout(function(){
  for (var i = 0; i < titles; i++) {
    hoverElement("t"+[i]);
 divHeights("t"+[i]);
  }
  for (var i = 0; i < paragraphs; i++) {
    hoverElement("p"+[i]);
 divHeights("p"+[i]);
  }
},300); 
}
