const input = document.querySelector('#input')
const HTML_todo = document.querySelector("#to-do-list")
const HTML_completed = document.querySelector('#completed-list')


var arr_todo = [];
var arr_completed = [];



function add_todo() {
  let entry = document.createElement("li");

  entry.appendChild(document.createTextNode(input.value));

  entry.addEventListener('click', () => {
    if(entry.style.textDecoration == "line-through"){
      entry.style.textDecoration = "none";
    } else {
    entry.style.textDecoration = "line-through";
    }
  });


  entry.addEventListener('auxclick', () => {
    let index;
    if(arr_todo.includes(entry)) {
      index = arr_todo.indexOf(entry);
      arr_completed.push(arr_todo[index]);
      arr_todo = removeIndex(arr_todo, index);
    }
    else {
      index = arr_completed.indexOf(entry);
      arr_todo.push(arr_completed[index]);
      arr_completed = removeIndex(arr_completed, index);

    }
    update();
  });

  arr_todo.push(entry)
  update();
  input.value = ''
}


function removeIndex(arr, index) {
  let temp = [];
  for(let i = 0; i < arr.length; i++) {
    if(i != index) {
      temp.push(arr[i])
    }
  }
  return temp;
}


function update() {

  HTML_todo.innerHTML = "";
  for(let item of arr_todo) {
    HTML_todo.appendChild(item);
  }
  for(let item of arr_completed) {
    HTML_completed.appendChild(item);
  }
}