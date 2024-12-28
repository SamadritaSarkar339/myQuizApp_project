document.addEventListener('DOMContentLoaded',() => {
    const startButton=document.getElementById("start-btn");
    const nextButton=document.getElementById("next-btn");
    const restartButton=document.getElementById("restart-btn");
    const questionContainer=document.getElementById("question-container");
    const questionText=document.getElementById("question-text");
    const choicesList=document.getElementById("choices-list");
    const resultContainer=document.getElementById("result-container");
    const scoreDisplay=document.getElementById("score");
    
    const questions=[
        {
        question: "What is the capital of Uttar Pradesh?",
        choices: ["Lucknow","Kolkata","Jaipur","Delhi"],
        answer: "Lucknow",
        },
    
    {
        question: "Who wrote Hamlet?",
        choices: ["Tagore","Ruskin Bond","Shakespeare","James Bond"],
        answer: "Shakespeare",
    
    
    },
    {
        question: "Which country removed Taliban from the list of banned organisations?",
        choices:  ["Israel","Pakistan","Ukraine","Russia"],
        answer: "Russia",
    
    
    }
    
    ];
    
    let currentQuestionIndex=0;
    let score=0;
    
    
    startButton.addEventListener('click',startQuiz);
    nextButton.addEventListener('click',() =>{
    
        currentQuestionIndex++;
        if(currentQuestionIndex<questions.length){
            showQuestion();
        }
        else{
            showResult();
        }
    
        
    })
    restartButton.addEventListener('click',() =>{
        currentQuestionIndex=0;
        score=0;
        resultContainer.classList.add=("hidden");
        startQuiz();
    })
    function startQuiz(){
    
        startButton.classList.add('hidden');
        resultContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        showQuestion();
    
    }
    function showQuestion(){
        nextButton.classList.add('hidden');
        questionText.textContent=questions[currentQuestionIndex].question;
        choicesList.innerHTML="";//clear previous choices
        questions[currentQuestionIndex].choices.forEach(choice => {
    
            const li=document.createElement('li');
            li.textContent=choice;
            li.addEventListener('click' ,() => selectAnswer(choice));
            choicesList.appendChild(li);
        })
    
    }
    
    function selectAnswer(choice){
        const correctAnswer=questions[currentQuestionIndex].answer
        if(choice===correctAnswer){
            score++;
        }
        nextButton.classList.remove("hidden");
    }
    function showResult(){
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreDisplay.textContent=` ${score} out of ${questions.length}`;
    }
    });