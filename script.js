const addInput=document.querySelector("#taskInput")
const addbtn=document.querySelector("#addButton")
const pList=document.querySelector("#pendingList")
const cList=document.querySelector("#completedList")
const alist=document.querySelector("#allList")
const clearbtn=document.querySelector("#clearButton")
const aArr=[]

addbtn.addEventListener("click",addTask)

function addTask(){
    const task=addInput.value
    if(task){
        const d=new Date(Date.now())
        const time=d.toLocaleTimeString()
        const date=d.toLocaleDateString()
        const isCompleted=false
        aArr.push([task,date,time,isCompleted])
        addInput.value=""
        display()
    }else{
        alert("Please Enter a Task")
    }
}
display()
function display(){
    pList.innerHTML=""
    cList.innerHTML=""
    alist.innerHTML=""
    aArr.forEach((task,i)=>{
        if(task[3]){
            cList.innerHTML+=`<li><input class="task" id="completed" type="text" value="${task[0]}"><span>${task[1]}</span><span style="{margin-right:1.5rem;}">${task[2]}</span><button class="deleteTask" onclick="remove(${i})"><img src="./delete.svg" alt="delete"></button><button class="penTask" onclick="pending(${i})"><img src="./restart.svg" alt="restart"></button></li>`
            alist.innerHTML+=`<li><input class="task" id="completed" type="text" value="${task[0]}"><span>${task[1]}</span><span style="{margin-right:1.5rem;}">${task[2]}</span><button class="deleteTask" onclick="remove(${i})"><img src="./delete.svg" alt="delete"></button><button class="penTask" onclick="pending(${i})"><img src="./restart.svg" alt="restart"></button></li>`
        }else{
            pList.innerHTML+=`<li><input class="task" id="pending" type="text" value="${task[0]}"><span>${task[1]}</span><span style="{margin-right:1.5rem;}">${task[2]}</span><button class="deleteTask" onclick="remove(${i})"><img src="./delete.svg" alt="delete"></button><button class="comTask" onclick="complete(${i})"><img src="./done.svg" alt="done"></button></li>`
            alist.innerHTML+=`<li><input class="task" id="pending" type="text" value="${task[0]}"><span>${task[1]}</span><span style="{margin-right:1.5rem;}">${task[2]}</span><button class="deleteTask" onclick="remove(${i})"><img src="./delete.svg" alt="delete"></button><button class="comTask" onclick="complete(${i})"><img src="./done.svg" alt="done"></button></li>`
        }

    })
}

function remove(i){
    aArr.splice(i,1)
    display()
}

function complete(i){
    aArr[i][3]=true
    display()
}
function pending(i){
    aArr[i][3]=false
    display()
}

function showList(i){
    alist.style.display="none";
    pList.style.display="none";
    cList.style.display="none";
    document.getElementById(i).style.display="block";
}

window.onLoad=()=>{
    display()
    showList("allList")
}





