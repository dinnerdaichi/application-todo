const form = document.getElementById('form');
const input = document.getElementById('input');
const ul = document.getElementById('ul');
const cotion = document.getElementById('cotion')
const tips = document.getElementById('tips');
const tipsText = document.getElementById('tips-text')

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos){
  todos.forEach(todo => {
    add(todo);
  })
}

form.addEventListener('submit',function(event){
  event.preventDefault();
  add();
});


function add(todo){
let todoText = input.value;

if (todo){
  todoText = todo.text;
}

if(todoText){
  
  const li = document.createElement('li');
  li.innerText = todoText;
  li.classList.add('list-item');

  if(todo && todo.complated){
    li.classList.add('text-line');
  }

li.addEventListener('contextmenu',function(event){
  event.preventDefault;
  li.remove();
  saveData();
});

li.addEventListener('click',function(){
li.classList.toggle('text-line');
saveData();

});


  ul.appendChild(li);
  input.value = "";
  saveData();

  cotion.classList.remove('display');

}else{

  cotion.classList.add('display');

}


}


function saveData(){
  const lists = document.querySelectorAll('li');
  let todos = [];



  lists.forEach(list => {

    let todo = {

      text:list.innerText,
      complated:list.classList.contains('text-line')

    }

    todos.push(todo);

  })

  localStorage.setItem('todos',JSON.stringify(todos));


}


tips.addEventListener('mouseover',function(){

  tipsText.classList.add('tips-display');

})

tips.addEventListener('mouseleave',function(){

  tipsText.classList.remove('tips-display');

})


