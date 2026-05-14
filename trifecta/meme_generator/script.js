const memeArray = [
  "https://i.imgur.com/bSi4xLb.png",
  "https://i.imgur.com/6y0G7N0.png",
  "https://i.imgur.com/LXnRao1.png",
  "https://i.imgur.com/Qqoxh1N.png"
];

const captionsArray = [
  "Me pretending to understand JavaScript",
  "When the code works on first try",
  "Debugging for 5 hours straight",
  "Frontend developers be like 😭"
];

const randomMeme = document.getElementById("random-meme")
const randomCaption = document.getElementById("random-caption")
const generatorButton = document.getElementById("generator-button")

generatorButton.addEventListener("click", ()=>{
    const randomMemeIndex = Math.floor(Math.random()* memeArray.length)

    const randomCaptionIndex = Math.floor(Math.random()* captionsArray.length)

    randomMeme.src = memeArray[randomMemeIndex]

    randomCaption.innerText = captionsArray[randomCaptionIndex]
})