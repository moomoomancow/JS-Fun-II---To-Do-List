
var htmlList = document.querySelector("#list");
var completed_list = document.querySelector("#completed-list")
let btn = document.querySelector('#submit');


btn.addEventListener('click', () => {
  let to_add = document.querySelector("#input").value;
  let entry = document.createElement("li");

  entry.addEventListener('click', () => {
    if(entry.style.textDecoration == "line-through"){
      entry.style.textDecoration = "none";
    } else {
    entry.style.textDecoration = "line-through";
    }
  });
    entry.addEventListener('auxclick', () => {
      htmlList.removeChild(entry);
      completed_list.appendChild(entry);
  })


  entry.appendChild(document.createTextNode(to_add));
  htmlList.appendChild(entry);
  input.value = ''
})

localStorage.setItem(htmlList)
existingEntry = localStorage.getItem(htmlList);


// list_items.push(to_add);