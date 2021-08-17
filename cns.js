//construct mainframe client
//flesh out stylesheet
//develop target nodes
//set up event listeners
    //consider how to render different questions/answers after each user selection
//develop highscores page
//develop scoring system
//intergrate timer last
//create hover affect as user mouses over choices
    //psuedo classes, while element is being moused over

let beginBttn=document.querySelector('button');//first button user is to click to initiate assesment
let userScore=0;//increments upon each correct selection (for loop with logic that handles incrementation), but also negatively impacts timer with each incorrect choice
let uxTimer=document.querySelector('#gameClock');//see if 'var' declaration being more effective/may not be a needed target
let renderedHourGlass=document.querySelector('#digitalRendering');

beginBttn.onclick=()=>{
    let countDown=3;

    let hourGlass=setInterval(()=>{
        renderedHourGlass.textContent=countDown--;        
    },1000);
    hourGlass;
    
    //clearInterval() to be invoked

    //engineer logicNeuralImpulse routing
        //engineer imulse routing so to update ui with new quetions/choices, upon user request
        //figure out DOM selectors
        //cloak strategic elemnts for dom targeting/ui architecture
}