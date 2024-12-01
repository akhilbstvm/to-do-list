document.getElementById("addbtn").addEventListener('click',()=>{
   
    const textInput = document.getElementById("textinput")
    const task=textInput.value.trim();
if(task==''){
   return alert("enter a task")
}

const li = document.createElement('li')
li.classList.add("list-group-item")
const span= document.createElement('span')
span.innerText=task

li.appendChild(span)

const completed = document.createElement('i')
    completed.classList.add('bi','bi-check')
    li.appendChild(completed)

    completed.addEventListener('click',()=>{
        span.classList.toggle('completed')
    })


    const deleteIcon =document.createElement('i')
    deleteIcon.classList.add('bi', 'bi-trash','fs-4', 'text-success')
    li.appendChild(deleteIcon)


deleteIcon.addEventListener('click',()=>{
    li.remove()
})


document.getElementById("taskList").appendChild(li)

textInput.value=''

})