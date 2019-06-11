import React, {useState} from 'react';
import iTask from "../../interfaces/Task";

interface UpdateFormInterface {
  todoList?: {id: string | number, task: string},
  task: iTask;
  updateTask: (task: iTask) => any;
}

const UpdateForm = (props: UpdateFormInterface) => {

  const [ItemTaskValue, setNewItemTask] = useState(props.task.task);

  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItemTask(e.target.value.trim().toString())
  };

  const updateExistedTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask: iTask = {
      id: props.task.id,
      task: ItemTaskValue
    };

    props.updateTask(newTask);

    if (ItemTaskValue !== '') {
      setNewItemTask('');
    }

  };

  return (
    <form onSubmit={updateExistedTask}>
      <input type="text" value={ItemTaskValue} onChange={handlerInputChange}/>
      <button>Update</button>
    </form>
  );
};

export default UpdateForm;
