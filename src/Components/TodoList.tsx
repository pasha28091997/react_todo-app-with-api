import React from 'react';
import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';
// import { CustomInputEditEvent } from '../App';

type TodoListProps = {
  filteredTodos: Todo[];
  setError: (value: string | null) => void;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setDeletUpdatTodoIds: React.Dispatch<React.SetStateAction<number[]>>;
  // onDelete: (id: Todo['id']) => void;
  // onToggle: (id: number) => void;
  tempTodo: Todo | null;
  deletUpdatTodoIds: number[];
  // updatingIds: number[];
  // editingId: number | null;
  // editingTitle: string;
  // setEditingTitle: (title: string) => void;
  // handleEditKeyDown: (e: CustomInputEditEvent, id: number) => void;
  // handleDoubleClick: (id: number, currentTitle: string) => void;
  // handleBlur: () => void;
};

export const TodoList: React.FC<TodoListProps> = ({
  filteredTodos,
  setError,
  setDeletUpdatTodoIds,
  // onDelete,
  // onToggle,
  setTodos,
  tempTodo,
  deletUpdatTodoIds,
  // updatingIds,
  // editingId,
  // editingTitle,
  // setEditingTitle,
  // handleEditKeyDown,
  // handleDoubleClick,
  // handleBlur,
}) => (
  <section className="todoapp__main" data-cy="TodoList">
    {filteredTodos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        setError={setError}
        setDeletUpdatTodoIds={setDeletUpdatTodoIds}
        setTodos={setTodos}
        // onDelete={onDelete}
        // onToggle={onToggle}
        isDeletUpdating={deletUpdatTodoIds.includes(todo.id)}
        // isUpdating={updatingIds.includes(todo.id)}
        // editingId={editingId}
        // editingTitle={editingTitle}
        // setEditingTitle={setEditingTitle}
        // handleEditKeyDown={handleEditKeyDown}
        // handleDoubleClick={handleDoubleClick}
        // handleBlur={handleBlur}
      />
    ))}
    {tempTodo && (
      <div data-cy="TempTodo">
        <TodoItem
          todo={tempTodo}
          setError={setError}
          setTodos={setTodos}
          setDeletUpdatTodoIds={setDeletUpdatTodoIds}
          // onDelete={() => {}}
          // onToggle={() => {}}
          isTemporary={true}
          // editingId={null}
          // editingTitle=""
          // setEditingTitle={() => {}}
          // handleEditKeyDown={() => {}}
          // handleDoubleClick={() => {}}
          // handleBlur={() => {}}
        />
      </div>
    )}
  </section>
);
