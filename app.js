var  btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#text-input")
var outputDiv = document.querySelector("#output")
var serverURL = "https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}
function errrorHandler(error){
    console.log("error occured",error);
    alert("something wrong with server! ")
}
function clickHandler() {
       var inputtext = textInput.value ;
       //calling server for processing
       fetch(getTranslationURL(inputtext))
       .then(response=>response.json())
       .then(json => {
           var translatedText = json.contents.translated
           outputDiv.innerText = translatedText;
       })
       .catch(errrorHandler)
}
btnTranslate.addEventListener("click" , clickHandler)
