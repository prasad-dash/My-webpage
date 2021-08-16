const title=["LEGACY OF ECSTASY","Live as if you were to die tomorrow. Learn as if you were to live forever.","We must not allow other people’s limited perceptions to define us.","Do what you can, with what you have, where you are.","This above all: to thine own self be true","If you cannot do great things, do small things in a great way."];
const titleElement=document.getElementById('introContent');
var item = title[Math.floor(Math.random()*title.length)];
titleElement.innerText=item;
const submitForm=document.getElementById("getInTouchContent")
var mailSubmitted=false;
const submitButton=document.getElementById("submitButton");
submitButton.addEventListener('click',(e)=>{
    e.preventDefault();
    mailSubmitted=true;
    submitForm.classList.add("thankYou");
    submitForm.innerHTML="<h1 id='thankYouText'>Thank You</h1>";
})
