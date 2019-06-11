import React, {useState} from 'react';

interface AddForm {
  addTask: Function,
}

const AddForm = (props: AddForm) => {

  const [newItemTask, setNewItemTask] = useState('');

  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItemTask(e.target.value.trim().toString())
  };

  const makeNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask: { id: string; task: string } = {
      id: new Date().toString(),
      task: newItemTask
    };

    if (newItemTask !== '') {
      props.addTask(newTask);
      setNewItemTask('');
    }

  };

  return (

    <form onSubmit={makeNewTask}>
      <input type="text" value={newItemTask} onChange={handlerInputChange}/>
      <button>Add new task</button>
    </form>

  );
};

export default AddForm;
