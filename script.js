
const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');

let play = false;
let newWords = "";
let randWords = "";
let sWords = ['green','mango','am','banana','php','c#','c++','php','orange',
'robi','html','you','love','mysql','kill','json','ajax','xml','polas',
'moon','sql','hate','apple','api']
const createNewSwords = () =>{
    let ranNum = Math.floor(Math.random() * sWords.length)
    let newTempsWords = sWords[ranNum];
    return newTempsWords;
}
const scrambleWords = (arr) => {
    for(let i = arr.length-1; i>0; i--){
        let temp = arr[i];
        // console.log(temp);
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
       
    }
    return arr;
}
btn.addEventListener('click',function(){
    if(!play){
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewSwords();
        randWords = scrambleWords(newWords.split("")).join("");
        // console.log(randWords.join(''));
        msg.innerHTML = `Guess the word : ${randWords}`;
        document.querySelector('.score').style.display = 'block'

        
    }else{
        let tempWord = guess.value;
        if(tempWord === newWords){
           play = false;
           msg.innerHTML = `Awesome It's Correct. It's ${newWords}`;
           btn.innerHTML = "Start Again";
           guess.classList.toggle('hidden');
           guess.value = "";
          let scoreValue = document.getElementById('score').innerText;
          let scorePrase = parseInt(scoreValue);
          document.getElementById('score').innerText = scorePrase + 1;

        }
        else{
            msg.innerHTML = `It's incorrect . Please try again ${randWords}`;
        }
    }
})