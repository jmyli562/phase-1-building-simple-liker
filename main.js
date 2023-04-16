// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  const hide = document.getElementById("modal");

  const heart = document.getElementsByClassName("like-glyph")[0];
  heart.addEventListener("click", () => {
    const serverCall = mimicServerCall()
    .then(function(){
      if(heart.className === "like-glyph" || heart.className === ""){
        heart.textContent = FULL_HEART;
        heart.className = "activated-heart";
      }else if(heart.className === "activated-heart"){
        heart.textContent = EMPTY_HEART;
        heart.className = "";
      }
    })
    .catch(function(error){
      hide.className = "";
      const message = document.getElementById("modal-message")
      message.textContent = error;
      
      setTimeout(() => {
        hide.className = "hidden";
      }, "3000")
    })
  })
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
