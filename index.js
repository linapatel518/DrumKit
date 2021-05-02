/** @format */

// alert("hi i am there with index.html");

function clickhandler() {
  alert("hey the key is clicked");
}

// document.querySelector("button").addEventListener("click", clickhandler);
// document.querySelector("button").addEventListener("click", clickhandler()); // as esmeh "parenthesis" se function-phle-hi-apne-app hi call hojayega. mtlb jab website load hogi tabhi yeh call hojayega, so toh mtlb apnko ess baat ka dhyn rkhna hai.

// as apn yaha "anormphouse"-function bhi use kr sktehh hai, as javascript meh anormphous-fn voh hotehh hai jinka koi naam nhi hota hai, and enn functions ka use apn "eventlistener" meh use krtehh hai, q ki yeh ekdam straight-forward ho jata hai and mtlb apnko edhar-udar jump nhi krna pdta while writing the code, mtlb jaise apn phle toh apna eventhander-fn banatehh hai and then phir "addEventListener" krtehh hai. toh mtlb overall yeh sidhe-simple "anormphouse"-fn ka use kr letehh hai. as like this:-

// document.querySelector("button").addEventListener("click", function () {
//   alert("orr batal bhai");
// });

// and aur ya apn ess "anormphous"-fn ki jagah simply "arrow-anormphouse-function" bhi use kr sktehh hai, jisseh ki phir apna kaam aur bhi easy hojayega.
// document.querySelector("button").addEventListener(
//   "click",
//   () => alert("here the arrow-anormous-function is used")
//   //   alert("bye bye"); as function meh multiple-statements k liyeh apnko "{}"-curly-braces ka use krna hoga.
// );

// Okay now adding "eventlisterners" to all the buttons by using "loop"
// var allbuttons = document.querySelectorAll("button");
// var allbuttons = document.querySelectorAll(".drum"); // as esseh krenge toh voh jada sahi rhega , as mtlb sirf only "apne drum-buttons pe yeh apna hoga."
// for (var i = 0; i < allbuttons.length; i++) {
//   allbuttons[i].addEventListener("click", function () {
//     alert(`hello the button-${i} is clicked`);
//     // Adding sounds to our website:-
//     // var audio1 = new Audio("sounds/crash.mp3");
//     // audio1.play();
//   });
// }

// // Adding sounds to our website:-
// var audio1 = new Audio("sounds/crash.mp3");
// audio1.play();
// as wali cheez apnko "document" meh assign krni hoti hai... as like down-just-below:-
document.querySelector("button").addEventListener("click", function () {
  var audio1 = new Audio("sounds/crash.mp3");
  audio1.play();
  console.log(this); // "this" ka mtlb ki yeh jo class-object hai, voh and yaha class-object voh "html-button" hai. thus toh mtlb yeh "this" uss "html-event" ko point krta hai jispeh apn ne "eventlistener" add kiya hai.
  console.log(this.textContent);
});

var allbuttonsforaudio = document.querySelectorAll(".drum");
for (var i = 0; i < allbuttonsforaudio.length; i++) {
  allbuttonsforaudio[i].addEventListener("click", function () {
    //naive-method:-
    // var audiourl = "sounds/" + "sound" + i + ".mp3";
    // var audio2 = new Audio(audiourl);
    // audio2.play();
    //
    buttonanimation(this.textContent);

    console.log(this);
    console.log(this.textContent);
    this.style.color = "yellow";
    var audioo;
    var audioourl = "sounds/";
    switch (this.textContent) {
      case "w":
        audioourl += "crash.mp3";
        audioo = new Audio(audioourl);
        audioo.play();
        break;
      case "a":
        audioourl += "kick-bass.mp3";
        audioo = new Audio(audioourl);
        audioo.play();
        break;
      case "s":
        audioourl += "snare.mp3";
        audioo = new Audio(audioourl);
        audioo.play();
        break;
      case "d":
        audioourl += "tom-1.mp3";
        audioo = new Audio(audioourl);
        audioo.play();
        break;
      case "j":
        audioourl += "tom-2.mp3";
        audioo = new Audio(audioourl);
        audioo.play();
        break;
      case "k":
        audioourl += "tom-3.mp3";
        audioo = new Audio(audioourl);
        audioo.play();
        break;
      case "l":
        audioourl += "tom-4.mp3";
        audioo = new Audio(audioourl);
        audioo.play();
        break;

      default:
        audioourl += "tom-4.mp3";
        audioo = new Audio(audioourl);
        audioo.play();
        break;
    }
  });
}
// as ess loop se mtlb hai ki apnne sare all buttons pe ek same hi "event" add diya hai.

// Adding Keyboard-event-listeners:-
// document.getElementById("title").addEventListener("keydown", function () { // as "keyboard-event" ko apnko only sirf "document" pe add krna hota hai.

document.addEventListener("keydown", function () {
  // alert("key is pressed");
  console.log(this);
});
document.addEventListener("keydown", function (evnt) {
  // as esseh apn voh jo bhi event huaa hai , usko as a input, apne khud k function meh le sktehh hai.
  // as mtlb yeh addEventListener()-fn jo hota hai na , voh happened-event-type ko apne inputing-function meh meh input krke call krta hai..
  // alert("see the console for seeing that which keyboard-event is happended");

  buttonanimation(evnt.key);

  // console.log(this);
  console.log(evnt);
  console.log(evnt.key);
  // this.style.color = "yellow";
  var audioo;
  var audioourl = "sounds/";

  switch (evnt.key) {
    case "w":
      audioourl += "crash.mp3";
      audioo = new Audio(audioourl);
      audioo.play();
      break;
    case "a":
      audioourl += "kick-bass.mp3";
      audioo = new Audio(audioourl);
      audioo.play();
      break;
    case "s":
      audioourl += "snare.mp3";
      audioo = new Audio(audioourl);
      audioo.play();
      break;
    case "d":
      audioourl += "tom-1.mp3";
      audioo = new Audio(audioourl);
      audioo.play();
      break;
    case "j":
      audioourl += "tom-2.mp3";
      audioo = new Audio(audioourl);
      audioo.play();
      break;
    case "k":
      audioourl += "tom-3.mp3";
      audioo = new Audio(audioourl);
      audioo.play();
      break;
    case "l":
      audioourl += "tom-4.mp3";
      audioo = new Audio(audioourl);
      audioo.play();
      break;

    default:
      audioourl += "tom-4.mp3";
      audioo = new Audio(audioourl);
      audioo.play();
      break;
  }
});

function buttonanimation(p1) {
  // document.querySelector(".w").classList.add("pressed");
  document.querySelector(`.${p1}`).classList.add("pressed");

  var currentbtn = document.querySelector(`.${p1}`);

  // setTimeout( fcurrentbtn.classList.remove("pressed"), 3);
  setTimeout(function () {
    currentbtn.classList.remove("pressed");
  }, 100);
  // as yeh setTimeout meh jo callback-function hai, voh passed time-limit k baad meh call "callback" hoga.
}
