const msg = document.querySelector('.msg');
const input = document.querySelector('input');
const btn = document.querySelector('.btn');

let play = false;
let  newWords = "";
let randWords = "";
let sWords = ['python','ruby','javascript','java','php','c#','c++','php','swift',
'css','html','bootstrap','reactjs','mysql','mongodb','json','ajax','xml','expressjs',
'vuejs','sql','typescript','jquery','api']

function createNewSwords(){
    let ranNum = Math.floor(Math.random() * sWords.length);
    let newTempsWords = sWords[ranNum];
    return newTempsWords;
}
const scrambleWords = (arr) => {
        for(let i = arr.length-1;i>0;i--){
            let temp = arr[i];
            let j = Math.floor(Math.random() * (i + 1));
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }
btn.addEventListener('click',function(){
    if(!play){
        play = true;
        btn.innerHTML = 'Guess';
        input.classList.toggle('hidden');
       newWords = createNewSwords()
       randWords = scrambleWords(newWords.split("")).join("");
       msg.innerHTML = `Guess the word : ${randWords}`;
       document.querySelector('.score').style.display = 'block'
    }else{
        inputValue = input.value;
        if(inputValue === newWords){
            play = false;
            msg.innerHTML = `Awesome It's Correct. It's ${newWords}`;
            btn.innerHTML = "Start Again";
            input.classList.toggle('hidden');
            input.value = "";
            let scoreValue = document.getElementById('score').innerText;
            let scorePrase = parseInt(scoreValue);
            document.getElementById('score').innerText = scorePrase + 1;
        }
        else{
            msg.innerHTML = `It's incorrect . Please try again ${randWords}`;
        }
    }
})