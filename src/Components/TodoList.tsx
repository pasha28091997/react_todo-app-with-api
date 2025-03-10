import React from 'react';
import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItems';
import { CustomInputEditEvent } from '../App';
// import classNames from 'classnames';

type TodoListProps = {
  filteredTodos: Todo[];
  onDelete: (id: Todo['id']) => void;
  onToggle: (id: number) => void;
  tempTodo: Todo | null;
  deletingTodoIds: number[];
  updatingIds: number[];
  editingId: number | null;
  editingTitle: string;
  setEditingTitle: (title: string) => void;
  handleEditKeyDown: (e: CustomInputEditEvent, id: number) => void;
  handleDoubleClick: (id: number, currentTitle: string) => void;
  handleBlur: () => void;
};

export const TodoList: React.FC<TodoListProps> = ({
  filteredTodos,
  onDelete,
  onToggle,
  tempTodo,
  deletingTodoIds,
  updatingIds,
  editingId,
  editingTitle,
  setEditingTitle,
  handleEditKeyDown,
  handleDoubleClick,
  handleBlur,
}) => (
  <section className="todoapp__main" data-cy="TodoList">
    {filteredTodos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onDelete={onDelete}
        onToggle={onToggle}
        isDeleting={deletingTodoIds.includes(todo.id)}
        isUpdating={updatingIds.includes(todo.id)}
        editingId={editingId}
        editingTitle={editingTitle}
        setEditingTitle={setEditingTitle}
        handleEditKeyDown={handleEditKeyDown}
        handleDoubleClick={handleDoubleClick}
        handleBlur={handleBlur}
      />
    ))}
    {tempTodo && (
      <div data-cy="TempTodo">
        <TodoItem
          todo={tempTodo}
          onDelete={() => {}}
          onToggle={() => {}}
          isTemporary={true}
          editingId={null}
          editingTitle=""
          setEditingTitle={() => {}}
          handleEditKeyDown={() => {}}
          handleDoubleClick={() => {}}
          handleBlur={() => {}}
        />
        {/* <div
          data-cy="TodoLoader"
          className={classNames('modal overlay', 'is-active')}
        >
          <div className="modal-background has-background-white-ter" />
          <div className="loader" />
        </div> */}
      </div>
    )}
  </section>
);
