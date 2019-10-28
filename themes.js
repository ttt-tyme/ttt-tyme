function swap(sheet) {
	document.getElementById("style").setAttribute("href", sheet);
	for (var i = 0; i < titles; i++) {
 divHeights("t"+[i]);
  }
  for (var i = 0; i < paragraphs; i++) {
 divHeights("p"+[i]);
}
