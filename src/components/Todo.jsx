import React from 'react'


function Todo(){
    
    const [query , setQuery] = React.useState("");
    const [task , setTask]= React.useState([])

    const handleChange =(e)=>{
       const {value} = e.target; 
       setQuery(value);
      
    }
    const addingTask = () => {
        document.getElementById("list").value=""
        const data = {
            title:query,
        };
        let newTask = [...task , data];
        setTask(newTask);

    };

  


    return(
        <div  id='upperBox'>
            <div>
                <div>
                    {task.map((item , index) => {
                        return(
                            <>
                            <div  id='listItem'>
                                <div>
                            <div id='value'>{item.title}</div>
                            <div className='checkbox'><input id='box'  type="checkbox" /></div>
                                </div>
                            </div>
                            </>
                        )

                    })}
                   
                </div>
            </div>


            <div id='addBox'>
                <input id='list' value={query} onChange={handleChange} placeholder='Type Something' />
                <button  onClick={addingTask}>+</button>
            </div>

                
        </div>
    )

}
export default Todo;