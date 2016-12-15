function moveright(elem,dur,from) {
  var left = from;
  var timer = setInterval(function() { left=left+3; elem.style.left = left + 'px'; if(left==document.body.clientWidth) { left=-42; } }, dur);
}
moveright(document.getElementById('cyclist1'),50,-42);
moveright(document.getElementById('cyclist2'),70,-136);
moveright(document.getElementById('cyclist3'),40,-84);
