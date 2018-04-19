import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Battle } from './../src/battlesystem.js';
import { Character } from './../src/characterset.js';

$(document).ready(function(){
  let player1Press;
  let player2Press;
  let mcount = 0;
  let vcount = 0;
  let clickCounter = true;
  let player1 = new Character('Johnny', 1);
  let player2 = new Character('Brea', 2);
  let battle = new Battle(player1, player2);

  //Phase 1 stuff
  $(document).keypress(function(event){
    if(event.keyCode >= 49 && event.keyCode <= 51) {
      player1Press = event.keyCode;
    }
    if(event.keyCode >= 55 && event.keyCode <= 57) {
      player2Press = event.keyCode;
    }
    if (player1Press && player2Press) {
      battle.phaseOne(player1Press, player2Press);
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
    clickCounter = true;
    setInterval(function () {
      if(i > 0){
        $("#countdown").text(i-1);
        i--;
      } else {
        clearInterval;
      }
    }, 1000);
    $(document).keypress(function(event){
      if(event.keyCode === 118 && clickCounter === true) {
        mcount ++;
        $("#m-count").text(mcount);
      }
      if(event.keyCode === 109 && clickCounter === true) {
        vcount ++;
        $("#v-count").text(vcount);
      }
      if(vcount >= 150){
        $("#phase-2").hide();
        $("#win-phase h3").text("PLAYER 2 WINS");
      }
      if(mcount >= 150){
        $("#phase-2").hide();
        $("#win-phase h3").text("PLAYER 1 WINS");
      }
    });
    setTimeout(function(){
      clickCounter = false;
      battle.phaseTwo(vcount, mcount);
      if(battle.winPhase()){
        console.log(battle.winPhase() + "wins");
      }
      else {
        console.log("no one wins yet");
      }
    }, 10000);
  });







});
