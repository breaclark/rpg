function phaseOne(player1, player2) {
  console.log("phase 1");
}

function phaseTwo(player1Clicks, player2Clicks) {
  console.log("phase 2");
}


$(document).ready(function(){
  let player1Press;
  let player2Press;
  let mcount = 0;
  let vcount = 0;
  let clickCounter = true;

  //Phase 1 stuff
  $(document).keypress(function(event){
    if(event.keyCode >= 49 && event.keyCode <= 51) {
      player1Press = event.keyCode;
    }
    if(event.keyCode >= 55 && event.keyCode <= 57) {
      player2Press = event.keyCode;
    }
    if (player1Press && player2Press) {
      phaseOne(player1Press, player2Press);
      $("#phase-1").hide();
      $("#phase-2").show();
      if (player1Press === 49) {
        $("#p1-type").attr("src","img/hacks.png");
      } else if (player1Press === 50) {
        $("#p1-type").attr("src","img/ai.png");
      } else {
        $("#p1-type").attr("src","img/martian.png");
      }
      if (player2Press === 55) {
        $("#p2-type").attr("src","img/hacks.png");
      } else if (player2Press === 56) {
        $("#p2-type").attr("src","img/ai.png");
      } else {
        $("#p2-type").attr("src","img/martian.png");
      }
      player1Press = undefined;
      player2Press = undefined;
    }
  });

  //Phase 2 stuff
  $("#start").click(function(){
    let i = 10;
    setInterval(function () {
      if(i > 0){
        $("#countdown").text(i-1);
        i--;
      } else {
        clearInterval;
      }
    }, 1000);
    $(document).keypress(function(event){
      if(event.keyCode === 109 && clickCounter === true) {
        mcount ++;
        $("#m-count").text(mcount);
      }
      if(event.keyCode === 118 && clickCounter === true) {
        vcount ++;
        $("#v-count").text(vcount);
      }
    });
    setTimeout(function(){
      clickCounter = false;
      phaseTwo(vcount, mcount);
    }, 10000);
  });






  
});
