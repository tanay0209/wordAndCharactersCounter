const inputArea = document.getElementById('inputArea');
const wordCounter = document.getElementById('wordCount');
const characterCounter = document.getElementById('characterCount');
const resetButton = document.getElementById('resetButton');




resetButton.addEventListener('click', () => {
    inputArea.value = ''
    wordCounter.innerText = `--`
    characterCounter.innerText = `--`
})


inputArea.addEventListener('keyup', (e) => {
    let characterCount = inputArea.value.length;
    let wordCount = inputArea.value
    wordCount = wordCount.match(/\w+/g);
    characterCounter.innerText = characterCount
    wordCounter.innerText = wordCount.length
    if(characterCount == 0)
    {
    wordCounter.innerText = 0;
    }
}
);
