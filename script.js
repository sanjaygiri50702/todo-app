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
            // var div = document.createElement('div'); 
            var element = document.createElement('li');
            var button = document.createElement('button');
            button.setAttribute('onclick', `deleteItem(${i})`);
            button.setAttribute('class','btn btn-outline-danger');
            element.setAttribute('class','list-group-item')
            button.innerText = 'Remove';
            console.log('task',this.taskList[i].task);
            element.innerText = this.taskList[i].task;
            // div.appendChild(element);
            // element.appendChild(button);
            document.getElementById('addtodo').appendChild(element);
            document.getElementById('addtodo').appendChild(button);
            // document.getElementsByTagName('input')[0].value = ''; 
        }
        return this
    }

}
var todo = new Todotask();



var deleteItem = (a)=>{
    todo.remove(a);
    document.getElementById('addtodo').innerHTML = '';
    todo.display();
}

window.onload = ()=>{
    todo.display();
}
document.querySelector('form').onsubmit = (event)=>{
    console.log('event',event)
    event.preventDefault();
    var task = document.getElementsByTagName('input')[0].value;
    document.getElementsByTagName('input')[0].value = '';
    todo.add(task);
    document.getElementById('addtodo').innerHTML = '';
    todo.display();

}
