// This game is hosted by Dexter Dorkman
// Game selectors
const guessInput = document.querySelector("input.number_guess");
const guessBtn = document.querySelector("button.guess")
const startBtn = document.querySelector("button.start")
const modalBackground = document.querySelector("section#modal_background")
const dexterDorkmanImg = document.querySelector("img#dexter-dorkman")

//Difficulty Levels Object
const difficultyLevels = {
    easy:document.querySelector("option#easy"),
    medium:document.querySelector("option#medium"),
    hard:document.querySelector("option#hard")
}

//Dexter Dorkman number in difficulty Levels
let dexterDorkmanNum = {
    easyDifficultyLevel:"",
    mediumDifficultyLevel:"",
    hardDifficultyLevel:""
}

//Array to select Dexter's number from
let dexterDorkmanNumsEasy = [];
let dexterDorkmanNumsMedium = [];
let dexterDorkmanNumsHard = []
let arrayIndex = 0

// Generating Dexter's number in mind
function easyDifficultyLevel(){
    let randomNum = Math.ceil(Math.random()*20)
    dexterDorkmanNumsEasy[arrayIndex] = randomNum
    arrayIndex++
}

function mediumDifficultyLevel(){
    let randomNum = Math.ceil(Math.random()*50)
    dexterDorkmanNumsMedium[arrayIndex] = randomNum
    arrayIndex++
}

function hardDifficultyLevel(){
    let randomNum = Math.ceil(Math.random()*100)
    dexterDorkmanNumsHard[arrayIndex] = randomNum
    arrayIndex++
}

// Game start function
function guessNumber(guessedNum){
    if(guessedNum == ""){
        dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_enter_a_number.png")
        guessInput.select()
            return
        }
        
    if(difficultyLevels["easy"].selected == true){
        easyDifficultyLevel()
        dexterDorkmanNum["easyDifficultyLevel"] = dexterDorkmanNumsEasy[0]

       if(guessedNum==dexterDorkmanNum["easyDifficultyLevel"]){
           setTimeout(function(){
            dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_processing.png")
        },500)

        setTimeout(function(){
            dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_correct.png")
        },1500)

        setTimeout(function(){
            location.reload()
        },3000)

       }

       else if(guessedNum>dexterDorkmanNum["easyDifficultyLevel"]){
           setTimeout(function(){
                dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_processing.png")
            },500)

            setTimeout(function(){
                dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_too_high.png")
                guessInput.value = ""
                guessInput.select()
            },1500)

       }

       else {
           setTimeout(function(){
                dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_processing.png")
            },500)

            setTimeout(function(){
                dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_too_low.png")
                guessInput.value = ""
                guessInput.select()
            },1500)

       }

    }

    // Medium Difficulty Gameplaly
    if(difficultyLevels["medium"].selected == true){
        mediumDifficultyLevel()
       dexterDorkmanNum["mediumDifficultyLevel"] = dexterDorkmanNumsMedium[0]

       if(guessedNum==dexterDorkmanNum["mediumDifficultyLevel"]){
            setTimeout(function(){
                dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_processing.png")
            },500)

            setTimeout(function(){
                dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_correct.png")
            },1500)

            setTimeout(function(){
                location.reload()
            },3000)
        }

        else if(guessedNum>dexterDorkmanNum["mediumDifficultyLevel"]){
           setTimeout(function(){
                dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_processing.png")
            },500)

            setTimeout(function(){
                dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_too_high.png")
                guessInput.value = ""
                guessInput.select()
            },1500)
        }

        else {
           setTimeout(function(){
                dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_processing.png")
            },500)

            setTimeout(function(){
                dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_too_low.png")
                guessInput.value = ""
                guessInput.select()
            },1500)
        }
    
    }

    // Hard Difficulty Gameplay
    if(difficultyLevels["hard"].selected == true){
        hardDifficultyLevel()
       dexterDorkmanNum["hardDifficultyLevel"] = dexterDorkmanNumsHard[0]

       if(guessedNum==dexterDorkmanNum["hardDifficultyLevel"]){
            setTimeout(function(){
                dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_processing.png")
            },500)

            setTimeout(function(){
                dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_correct.png")
            },1500)

            setTimeout(function(){
                location.reload()
            },3000)
        }

        else if(guessedNum>dexterDorkmanNum["hardDifficultyLevel"]){
           setTimeout(function(){
                dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_processing.png")
            },500)

            setTimeout(function(){
                dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_too_high.png")
                guessInput.value = ""
                guessInput.select()
            },1500)
        }

        else {
           setTimeout(function(){
                dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_processing.png")
            },500)

            setTimeout(function(){
                dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_too_low.png")
                guessInput.value = ""
                guessInput.select()
            },1500)
        }

    }
}

    function startGame(){
        guessBtn.removeEventListener("click",clickToGuess);
    
        modalBackground.style.display = "none";
        setTimeout(function(){
            dexterDorkmanImg.style.display = "block"
    
        },300)

        setTimeout(function(){
            dexterDorkmanImg.setAttribute("src", "dexter-dorkman-images/Dexter_Dorkman_introduction.png")
        },1500)
    
        setTimeout(function(){
        if(difficultyLevels["easy"].selected == true){
            dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_1-20.png")
        }
    
        if(difficultyLevels["medium"].selected == true){
            dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_1-50.png")
        }
    
        if(difficultyLevels["hard"].selected == true){
            dexterDorkmanImg.setAttribute("src","dexter-dorkman-images/Dexter_Dorkman_1-100.png")
        }
        },4000)
    
        setTimeout(function(){
            guessBtn.addEventListener("click",clickToGuess)
            guessInput.select()
        },4000)
    }


    // Dexter Dorkman intro at game start
    startBtn.addEventListener("click",function(){
        startGame() 
    })

    
    // Guess when enter key is pressed
    guessInput.addEventListener('keypress', function(e){
        if(e.key == "Enter"){
            guessNumber(guessInput.value.trim())
        }
    })

    //Guessing starts gameStart()
    guessBtn.addEventListener("click",clickToGuess)

    function clickToGuess(){
        guessNumber(guessInput.value.trim())
    }