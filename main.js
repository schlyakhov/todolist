const InputTask = document.querySelector('input');
const NewTaskBtn = document.querySelector('.submit-button');

NewTaskBtn.addEventListener('click', function(){
  if(InputTask.value.trim()!=0) {/* Уберает пробелы меж строк */
    let LocalItems = JSON.parse(localStorage.getItem('localitem'))
    if(LocalItems === null){
      TaskArr = []
    }
    else {
      TaskArr = LocalItems;
    }
     TaskArr.push(InputTask.value)
     localStorage.setItem('localitem', JSON.stringify(TaskArr));
  }
 showItem()
})

function showItem() {
 let LocalItems = JSON.parse(localStorage.getItem('localitem'))
    if(LocalItems === null){
      TaskArr = []
    }
    else {
      TaskArr = LocalItems;
    }
    let html = '';
    let ShowItems = document.querySelector('.tasks');
    TaskArr.forEach((data, index)=> {
      html += `
      <div class ="task" >
      <p class = "task-text"> New task: ${data}</p>
      <button class = "button-delete" onClick="deleteItem(${index})">&#10007;</button>
      </div>
      `
    })
    ShowItems.innerHTML = html;
}
showItem()

function deleteItem(index){
  let LocalItems = JSON.parse (localStorage.getItem('localitem'))
  TaskArr.splice(index , 1)
  localStorage.setItem('localitem', JSON.stringify(TaskArr));
  showItem()
}

