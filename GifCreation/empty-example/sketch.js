
var api = "https://api.giphy.com/v1/gifs/random?";
var apiKey = "&api_key=5V1f5FU1zPLyus5FOhhYjxQtIpSESdUa";
var tag = "&tag=";
//var input = "chill"
var gif;
var gifHeight;
var gifWidth;



function setup() {
  // put setup code here
 // createCanvas(windowWidth, windowHeight);
  //background(0);


  var button  = select('#submit');
  button.mousePressed(giphyAsk);
  input = select('#search');

  
  //createImg("media/Giphy Attribution Marks/Static Logos/Small/Light Backgrounds/Poweredby_100px-White_VertLogo.png");//attribution to giphy
}

function gotData(giphy) {
  gif = createImg(giphy.data.image_url);// .hide() will hide gif
  gifWidth = giphy.data.image_width;
  gifHeight = giphy.data.image_height;
  //drawGif();
}



function giphyAsk(){
	//clear(); //clear canvas
 // background(0);
  
  var url = api + apiKey + tag + input.value();
  loadJSON(url, gotData);
}




function drawGif(giphy){

  image(gif, 0, 0, gifWidth, gifHeight);


}


