import React from "react";

function Todolist(){
   var [todos, setTodos] = React.usestate(['Wake up!', 'Do exercise.', 'Take bath', 'Have Breakfast'])
   var [newtask, setnewtask] = React.useState('');
   var myRef = React.useRef()
   function addTask(){
    setTodos([...todos, newtask])
   }
   function cheakEnter(e){
    if(e.key === 'Enter'){
        addTask();
    }
   }
    
   React.useEffect(() => {
    myRef.current.focus();
   },[])
   
 //------------creating a delete function  
   function del(){
    alert("delete this item")
   }

   return(
    <div className = "Work">
        <h1 className = "bluecol">Todolist</h1>
        <input type="text" onChange="{() => {setnewtask(e.target.value)  ref={myref} onKeyUp ={checkEnter} }}" />
           {
            todos.map((t,i) => {
                return (<li>
                    {t}
                    <button onClick = {() => {del(i)}}>Delete</button>
                </li>)
            })
           }  
    </div>
   )
}

export default Todolist