import ToDoItem from './ToDoItem';
 
const ToDoList = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map((todo) => <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      )}
    </div>
  );
};
 
export default ToDoList;