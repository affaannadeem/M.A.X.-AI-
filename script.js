let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function wishMe(name = "Affaan") {
  let day = new Date();
  let hours = day.getHours();
  let minutes = day.getMinutes();
  let greeting;

  if (hours >= 0 && hours < 12) {
      greeting = "Good Morning " + name;
  } else if (hours >= 12 && hours < 16) {
      greeting = "Good Afternoon " + name;
  } else if (hours < 20) {
      greeting = "Good Evening " + name;
  } else {
      greeting = "Good Night " + name;
  }

  // Format the time to be spoken
  let timeString = `The time is ${hours} ${minutes === 0 ? "o'clock" : minutes}`;

  // Speak the greeting and time
  speak(`${greeting}. ${timeString}.`);
}

function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  window.speechSynthesis.speak(text_speak);
}

window.addEventListener('load', () => {
  wishMe();
});

let speechRecognition=window.speechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
  let currentIndex=event.resultIndex 
  let transcript=event.results[currentIndex][0].transcript  
  content.innerText=transcript 
 takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
  btn.style.display="flex"
  voice.style.display="none"
  if(message.includes("hello Max")||message.includes("hey Max")){
    speak("hello Affaan, how may i help you")
  }
  else if(message.includes(" max who are you")){
    speak("I’m Max, Affaan's personal virtual assistant engineered to make life simpler and smarter! From handling everyday tasks to bringing your ideas to life, I'm designed to work seamlessly with you. Think of me as your digital partner, powered with advanced technology, always ready to support, inform, and inspire. Just say the word, and I’m here to help!")
  }
  else if(message.includes("Max who has made you")){
    speak("Affaan Nadeem, who is a passionate programmer has invented me")
  }else if(message.includes("open chat GPT")){
    speak("opening chatgpt...")
    window.open("https://chatgpt.com","_blank")
 }else if(message.includes("open google")){
  speak("opening google...")
  window.open("https://www.google.com","_blank")
}else if(message.includes("open facebook")){
  speak("opening facebook...")
  window.open("https://www.facebook.com","_blank")
}else if(message.includes("open instagram")){
  speak("opening instagram...")
  window.open("https://www.instagram.com","_blank")
}else if(message.includes("open calculator")){
  speak("opening calculator...")
  window.open("calculator://")
}else if(message.includes("open whatsapp")){
  speak("opening whatsapp...")
  window.open("whatsapp://")
}else if(message.includes("open Youtube")){
  speak("opening youtube...")
  window.open("youtube://")
}else if(message.includes("open vs code")){
  speak("opening vs code...")
  window.open("vs code://")
}else if(message.includes("open microsoft edge")){
  speak("opening microsoft edge...")
  window.open("microsoft edge://")
}else if(message.includes("time")){
  let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
  speak(time)
}else if(message.includes("date")){
  let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
  speak(date)
}else{
  let finalText="this is what i found on internet regarding"+message.replace("Max","")||message.replace("maths","")
  speak(finalText)
  window.open(`https://www.google.com/search?q=${message.replace("maths","")}`)
}
}
