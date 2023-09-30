import axios from 'axios';

export function fetchTodos() {
    return axios.get("/api/todos/")
    .catch(err =>{
        console.error(err)
    })
}

export function saveTodo(item) {
    try{
        if(item.id) {
            return axios.put(`http://localhost:8000/api/todos/${item.id}/` ,item)
        }
        return axios.post("http://localhost:8000/api/todos/", item)
    }catch(e){
        console.error(e)
    }
}

export function deleteTodo(item) {
    try{
        axios.delete(`http://localhost:8000/api/todos/${item.id}/`)
    .then(res => res.status)
    }catch(e){
        console.error(e)
    }
   
}


export function checkItem(item){
    console.log(item)
    var itemPassed = true
    if(item.title.length === 0){
        itemPassed = false
    }

    return itemPassed
}