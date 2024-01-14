let user=0;
let comp=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscore=document.querySelector("#user");
const compscore=document.querySelector("#comp");
const showwin=(userwin,userchoice,compchoice)=>{
    if (userwin){
        user++;
        userscore.innerText=user;
        compscore.innerText=comp;
        msg.innerText=`You win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";

    }
    else{
        comp++;
        userscore.innerText=user;
        compscore.innerText=comp;
        msg.innerText=`You loose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red"
    }

};
const gencomputer= () => {
    const computerchoices=["rock","paper","scissor"];
    const outchoice=computerchoices[Math.floor((Math.random()*3))];
    return outchoice;
};
const drawfunction=() =>{
    msg.innerText="It's a draw. Play Again ";
    msg.style.backgroundColor="#081b31";
};
const playgame=(userchoice) =>{
    const compchoice=gencomputer();
    if (compchoice===userchoice){
        drawfunction();
    }
    else{
        userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"? false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="Scissor"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
    }
    showwin(userwin,userchoice,compchoice);


};
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);

    });
});