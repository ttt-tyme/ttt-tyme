
  const titles = 5;
  const paragraphs = 466;
  const timesHeightsAndHover = 20;
  var timesDoneHeightsAndHover = 0; 
$(function() {
  heightsAndHover();

  $(window).resize(function() {
  for (var i = 0; i < titles; i++) {
	divHeights("t"+[i]);
  }
  for (var i = 0; i < paragraphs; i++) {
	divHeights("p"+[i]);
  }
  });
});


function heightsAndHover()
{
setTimeout(function(){
for (var i = 0; i < titles; i++) {
    hoverElement("t"+[i]);
	divHeights("t"+[i]);
  }
  for (var i = 0; i < paragraphs; i++) {
    hoverElement("p"+[i]);
	divHeights("p"+[i]);
  }
  if (timesDoneHeightsAndHover < timesHeightsAndHover) {
timesDoneHeightsAndHover = timesDoneHeightsAndHover +1;
	heightsAndHover()
  }
},3000); 
}


function divHeights(element) {
  $(".l" + element).height("auto");
  $(".r" + element).height("auto");
  
  var lElement = $(".l" + element).height();
  var rElement = $(".r" + element).height();
  if (lElement < rElement) {
    $(".l" + element).height(rElement);
  } else if (lElement > rElement) {
    $(".r" + element).height(lElement);
  }
}

function hoverElement(element) {
  $(".l" + element).hover(
    function() {
      $(".l" + element).wrapInner("<span class='lHighlight'></span>");
      $(".r" + element).wrapInner("<span class='rHighlight'></span>");
    },
    function() {
      var innerLHighlight = $(".lHighlight").contents();
      var innerRHighlight = $(".rHighlight").contents();
      $(".lHighlight").replaceWith(innerLHighlight);
      $(".rHighlight").replaceWith(innerRHighlight);
    }
  );

  $(".r" + element).hover(
    function() {
      $(".l" + element).wrapInner("<span class='lHighlight'></span>");
      $(".r" + element).wrapInner("<span class='rHighlight'></span>");
    },
    function() {
      var innerLHighlight = $(".lHighlight").contents();
      var innerRHighlight = $(".rHighlight").contents();
      $(".lHighlight").replaceWith(innerLHighlight);
      $(".rHighlight").replaceWith(innerRHighlight);
    }
  );
}
