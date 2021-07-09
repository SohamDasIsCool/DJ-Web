song= "";
song_2="";
function preload(){
    song=loadSound("music.mp3");
    song_2=loadSound("music2.mp3"); 
}
function setup(){
}
function draw(){
}
function sing1(){
    song.play();
}
function sing2(){
  song_2.play();
  }
var rangeslider = document.getElementById("sliderRange");
var output = document.getElementById("vol");
output.innerHTML = "Volume:"+rangeslider.value;
rangeslider.oninput = function() {
  output.innerHTML = "Volume:"+this.value;
  song.setVolume(this.value/100);
}
var rateSlider = document.getElementById("sliderRate");
var outputr = document.getElementById("r");
outputr.innerHTML = "Rate:"+rateSlider.value;
rateSlider.oninput = function() {
  outputr.innerHTML = "Rate:"+rateSlider.value;
  song.rate(rateSlider.value);
}
var rangeslider2 = document.getElementById("sliderRange2");
var output2 = document.getElementById("vol2");
output2.innerHTML = "Volume:"+rangeslider2.value;
rangeslider2.oninput = function() {
  output2.innerHTML = "Volume:"+this.value;
  song_2.setVolume(this.value/100);
}
var rateSlider2 = document.getElementById("sliderRate2");
var outputr2 = document.getElementById("r2");
outputr2.innerHTML = "Rate:"+rateSlider2.value;
rateSlider2.oninput = function() {
  outputr2.innerHTML = "Rate:"+rateSlider2.value;
  song_2.rate(rateSlider2.value);
}