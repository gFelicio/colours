var c = document.getElementById('container');

var colourIsLight = function (r, g, b) {

  // Counting the perceptive luminance
  // human eye favors green color...
  var a = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  console.log('a = ' + a);
  return (a < 0.5);
}

var randomRgb = function () {
  var r = /* 189; //*/ Math.floor(Math.random() * 256);
  console.log('r = ' + r);
  var g = /*60; //*/ Math.floor(Math.random() * 256);
  console.log('g = ' + g);
  var b = /*151; //*/ Math.floor(Math.random() * 256);
  console.log('b = ' + b);
  return [r, g, b];
};

var colourFromRgb = function (r, g, b) {
  return 'rgb(' + r + ',' + g + ',' + b + ')';
};

for (var i = 0; i < 12; i += 1) {
  var el = document.createElement('div');
  el.setAttribute('class', 'box');
  el.textContent = "";

  var bgRgb = randomRgb();
  var bgColour = colourFromRgb(bgRgb[0], bgRgb[1], bgRgb[2]);
  var textColour = colourIsLight(bgRgb[0], bgRgb[1], bgRgb[2]) ? 'black' : 'white';

  if(textColour == 'black')
  {
    el.textContent = "This box is light-ish";
  }
  else
  {
    el.textContent = "This box is dark-ish";
  }

  el.setAttribute('style', 'background-color: ' + bgColour + '; color: ' + textColour);

  c.appendChild(el);
}
