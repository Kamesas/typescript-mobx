import React, {useState} from 'react';

const ToDo = () => {

  const [todoList, setTaskList] = useState<{id: string, task: string}[]>([]);
  const [newItemTask, setNewItemTask] = useState('');

  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItemTask(e.target.value.trim().toString())
  };

  const addTask = () => {

    const newTask: { id: string; task: string } = {
      id: new Date().toString(),
      task: newItemTask
    };

    if (newItemTask !== '') {
      setTaskList([newTask, ...todoList]);
      setNewItemTask('');
    }

  };

  return (
    <div>
      <input type="text" value={newItemTask} onChange={handlerInputChange}/>
      <button onClick={addTask}>Add</button>

      {todoList && todoList.map(item => {
        return <li key={item.id} >{item.task}</li>
      })}

    </div>
  );
};

export default ToDo;
