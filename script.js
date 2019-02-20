class Todo {
    constructor(task,date = Date()){
        this.task = task;
        this.date = date;
    }
}

class Todotask {
    constructor(){
        this.taskList = [];

        if(localStorage.getItem('todo')){
            this.taskList = JSON.parse(localStorage.getItem('todo'))
        }
    }

    add(task){
        var data = new Todo(task);
        this.taskList.push(data);
        localStorage.setItem('todo',JSON.stringify(this.taskList));
        // this.display();
        return this;
    }
    remove(position){
        // console.log('position',position);
        
        this.taskList.splice(position,1);
        localStorage.setItem('todo',JSON.stringify(this.taskList));
 
        return this;
    }
    display(){
        for(var i = 0 ;i<this.taskList.length;i++){
        console.log('tasklist',this.taskList)
            var div = document.createElement('div'); 
            var element = document.createElement('p');
            var button = document.createElement('button');
            button.setAttribute('onclick', `deleteItem(${i})`)
            button.innerText = 'Remove';
            console.log('task',this.taskList[i].task);
            element.innerText = this.taskList[i].task;
            div.appendChild(element);
            div.appendChild(button);
            document.getElementById('addtodo').appendChild(div);
            // document.getElementsByTagName('input')[0].value = ''; 
        }
        return this
    }

}
var todo = new Todotask();

document.querySelector('button').addEventListener('click',function(){
    var task = prompt('add todo');
    // console.log('c',task);
    todo.add(task);
    document.getElementById('addtodo').innerHTML = '';
    todo.display();
})

var deleteItem = (a)=>{
    todo.remove(a);
    document.getElementById('addtodo').innerHTML = '';
    todo.display();
}

window.onload = ()=>{
    todo.display();
}
// var jsonData = localStorage.getItem('todo');
// localStorage.removeItem("todo");
// console.log('daa',jsonData);
//  var data = JSON.parse(jsonData);
// console.log('daa',data);

// for(var i = 0;data.length;i++){
//     todo.add(data[0].task);
// }
// todo.display();
