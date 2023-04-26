


document.getElementById("ENTER").addEventListener("click",()=>{CHECKNOTE()});

addEventListener("keypress",(E)=>{
    if(E.key == "Enter"){
        CHECKNOTE();
    }
})

function CHECKNOTE(){
    const ACTIVITY = document.getElementById("TEXT");
    if(ACTIVITY.value.length >= 3){
        CREATE(ACTIVITY.value);
        ACTIVITY.value = "";
    }
}


function CREATE(TEXT){
    var COUNT = document.querySelectorAll(".COUNT").length
var EL = document.createElement("div");
EL.setAttribute("id", "NOTE"+(COUNT));
EL.className = "COUNT";
document.getElementById("NOTES-WRAPPER").appendChild(EL);
var P1 = document.createElement("p")
P1.innerHTML = TEXT;
P1.setAttribute("id","NOTELABEL"+(COUNT))
EL.appendChild(P1);
var B1 = document.createElement("button")
B1.innerHTML = "Done";
B1.classList.add('BTN',"LEFT");
B1.setAttribute("onclick","DONE("+(COUNT)+")");
var B2 = document.createElement("button")
B2.innerHTML = "Edit";
B2.classList.add('BTN',"RIGHT");
B2.setAttribute("onclick","ADDEDITMODE("+(COUNT)+")");
EL.appendChild(B1);
EL.appendChild(B2);
}


function EDIT(T){
var TXT = document.getElementById("text"+(T)).value;
if(TXT.length > 3){
    document.getElementById("NOTELABEL"+(T-1)).innerHTML = TXT;
    document.getElementById("edit"+(T)).remove();
}
}

function DONE(T){
    document.getElementById("NOTE"+(T)).remove();
}


function ADDEDITMODE(T){
var COUNT = document.querySelectorAll(".COUNT").length;
var CON = document.createElement("div");
CON.className = "DIVY";
var INPUT = document.createElement("input");
INPUT.setAttribute("type","text");
INPUT.setAttribute("id","text"+COUNT);
INPUT.setAttribute("maxlength",22)
var BUTTON = document.createElement("button");
CON.setAttribute("id","edit"+COUNT);
BUTTON.setAttribute("onclick","EDIT("+(COUNT)+")");
BUTTON.innerHTML = "DONE";
CON.appendChild(INPUT);
CON.appendChild(BUTTON);
document.getElementById("NOTE"+(T)).appendChild(CON);
}