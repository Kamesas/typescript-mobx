import React, {useState} from 'react';
import iTask from "../../interfaces/Task";

interface UpdateFormInterface {
  updatingTask: iTask,
  updateTask: Function
}

const UpdateForm = (props: UpdateFormInterface) => {

  const [ItemTaskValue, setNewItemTask] = useState(props.updatingTask.task);

  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItemTask(e.target.value.trim().toString())
  };

  const updateExistedTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask: iTask = {
      id: props.updatingTask.id,
      task: ItemTaskValue
    };

    props.updateTask(newTask);

  };

  return (
    <form onSubmit={updateExistedTask}>
      <input type="text" value={ItemTaskValue} onChange={handlerInputChange}/>
      <button>Update</button>
    </form>
  );
};

export default UpdateForm;
