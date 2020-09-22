var flag = 0;
var attempts = 0;
var initial_images = [["images/mi10.png","product-image-mi10"],["images/laptop.png","product-image-laptop"],["images/tv.png","product-image-tv"],["images/miband.png","product-image-band"],["images/trimmer.png","product-image-trimmer"],["images/purifier.png","product-image-purifier"],["images/powerbank.png","product-image-powerbank"],["images/mi8.png","product-image-redmi8"]]
var results = ["images/fruit.png","images/durga.png","images/durga.png","images/fruit.png","images/fruit.png","images/fruit.png","images/fruit.png","images/fruit.png"]
var results_2 = ["images/fruit.png","images/fruit.png"];

shuffle(results);
shuffle(initial_images);
var status = setInterval(checkStatus,500);

function download_brochure(){
    //downloadbrochure on loading index.html
    //document.getElementById('downloadLink').click();
}

function play_clicked(){
    window.location.href="game.html";
}

function init_load(){
    
    for(var i =1; i<=8;i++){
        document.getElementById("prod"+i).src=initial_images[i-1][0];
        document.getElementById("prod"+i).className=initial_images[i-1][1];
    }
}

function onProductClick(index, id){
    attempts+=1;
    var imageHolder = document.getElementById(id);
    if(results[index]=="images/durga.png" && attempts<=2){//&& attempts<=2
        console.log("won")
        flag = 1;    
       // imageHolder.onload = setTimeout(checkResult,500);   
    } else{
       // flag = 0;
    } 
    imageHolder.src=results[index];
}

function checkResult(){
   if(flag ==1){
        alert("You have won 10% discount" )
    }
}

function checkStatus(){
    if(attempts<=2 && flag ==1){
        alert("Congratulations! You win 10% discount!!\n Click OK to redeem it!")
        flag = 0;
        window.location.href="win.html";
    } else if(attempts >=8){
        alert("Click Ok to restart the game");
        shuffle(results);
        shuffle(initial_images);
        init_load();
        flag = 0;
        attempts = 0;
    }
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }