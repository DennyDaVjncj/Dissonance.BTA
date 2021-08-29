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
let cloakedDiv=document.querySelector('targetedDiv');

beginBttn.onclick=()=>{
    //place cloaking #id on initial block of text with hide attribute to be toggled on user click
        //after each question is answered question, a new div with questions is to "arrive"
    
    let countDown=3;
    let hourGlass=setInterval(()=>{
        renderedHourGlass.textContent=countDown--;
        if(countDown<0){
            clearInterval(hourGlass);
            alert("You ran out of time bub...")
        }
    },1000);
    hourGlass;    
    // let breakGlass=clearInterval(hourGlass);
    // if(hourGlass<1){
    //     breakGlass();
    // }

    //engineer logicNeuralImpulse routing
        //engineer imulse routing so to update ui with new quetions/choices, upon user request
        //figure out DOM selectors
        //cloak strategic elemnts for dom targeting/ui architecture
    //flow of logic is crucial here
}