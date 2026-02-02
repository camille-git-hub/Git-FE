const ToDoItem = ({ todo, toggleTodo }) => {

  return (
    <li className='flex items-center mb-2'>
        <label htmlFor="{todo.id}">
        <input id={todo.id} type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo.id)} className='mr-2'>{todo.text}</input>
        </label>
    </li>
  );
};
 
export default ToDoItem;