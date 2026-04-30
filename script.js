function start(){
  document.body.requestFullscreen();

  let t = document.getElementById("text");
  let i = 0;

  let load = setInterval(()=>{
    i++;
    t.innerText = "scanning " + (i*10) + "%";

    if(i>=10){
      clearInterval(load);
      jumpscare();
    }
  },250);
}

function jumpscare(){
  document.body.classList.add("glitch");
  document.body.innerHTML = "";

  let img = document.createElement("img");
  img.src = "gatau.jpg"; // ganti file foto lu sendiri
  document.body.appendChild(img);

  let audio = new Audio("scream.mp3"); // taro file audio di folder yang sama
  audio.play();
}
