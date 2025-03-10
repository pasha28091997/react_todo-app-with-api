/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
import React, { useEffect, useRef } from 'react';
import { Todo } from '../types/Todo';
import cn from 'classnames';
import { CustomInputEditEvent } from '../App';

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: Todo['id']) => void;
  onToggle: (id: number) => void;
  isUpdating?: boolean;
  isDeleting?: boolean;
  isTemporary?: boolean;
  editingId: number | null;
  editingTitle: string;
  setEditingTitle: (title: string) => void;
  handleEditKeyDown: (e: CustomInputEditEvent, id: number) => void;
  handleDoubleClick: (id: number, currentTitle: string) => void;
  handleBlur: () => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onDelete,
  onToggle,
  isUpdating = false,
  isDeleting = false,
  isTemporary = false,
  editingId,
  editingTitle,
  setEditingTitle,
  handleEditKeyDown,
  handleDoubleClick,
  handleBlur,
}) => {
  const { id, title, completed } = todo;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingId === id) {
      inputRef.current?.focus();
    }
  }, [editingId, id]);

  // return (
  //   <div data-cy="Todo" className={cn('todo', { completed })}>
  //     {/*checkbox */}
  //     <label className="todo__status-label" htmlFor={`todo-${id}`}>
  //       <input
  //         id={`todo-${id}`}
  //         data-cy="TodoStatus"
  //         type="checkbox"
  //         className="todo__status"
  //         checked={completed}
  //         onChange={() => onToggle(id)}
  //         disabled={isTemporary || isUpdating || isDeleting}
  //       />
  //     </label>

  //     <div
  //       data-cy="TodoLoader"
  //       className={cn('modal overlay', {
  //         'is-active': isTemporary || isUpdating || isDeleting,
  //       })}
  //     >
  //       <div className="modal-background has-background-white-ter" />
  //       <div className="loader" />
  //     </div>

  //     {editingId === id ? (
  //       <span
  //         data-cy="TodoTitle"
  //         className="todo__title"
  //         onDoubleClick={() => handleDoubleClick(id, title)}
  //       >
  //         {title}
  //       </span>
  //     ) : (
  //       <form onKeyUp={e => handleEditKeyDown(e, id)}>
  //         <input
  //           ref={inputRef}
  //           data-cy="TodoTitleField"
  //           type="text"
  //           className="todo__title-field"
  //           value={editingTitle}
  //           onChange={e => setEditingTitle(e.target.value)}
  //           onKeyDown={e => handleEditKeyDown(e, id)}
  //           onBlur={handleBlur}
  //         />
  //       </form>
  //     )}
  //     {editingId !== id && (
  //       <button
  //         type="button"
  //         className="todo__remove"
  //         data-cy="TodoDelete"
  //         onClick={() => onDelete(id)}
  //         disabled={isTemporary || isUpdating || isDeleting}
  //       >
  //         ×
  //       </button>
  //     )}
  //   </div>
  // );
  return (
    <div data-cy="Todo" className={cn('todo', { completed })}>
      {/*checkbox */}
      <label className="todo__status-label" htmlFor={`todo-${id}`}>
        <input
          id={`todo-${id}`}
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          checked={completed}
          onChange={() => onToggle(id)}
          disabled={isTemporary || isUpdating || isDeleting}
        />
      </label>

      {editingId === id ? (
        <form onKeyUp={e => handleEditKeyDown(e, id)}>
          <input
            ref={inputRef}
            data-cy="TodoTitleField"
            type="text"
            className="todo__title-field"
            value={editingTitle}
            onChange={e => setEditingTitle(e.target.value)}
            onKeyDown={e => handleEditKeyDown(e, id)}
            onBlur={handleBlur}
          />
        </form>
      ) : (
        <span
          data-cy="TodoTitle"
          className="todo__title"
          onDoubleClick={() => handleDoubleClick(id, title)}
        >
          {title}
        </span>
      )}
      {editingId !== id && (
        <button
          type="button"
          className="todo__remove"
          data-cy="TodoDelete"
          onClick={() => onDelete(id)}
          disabled={isTemporary || isUpdating || isDeleting}
        >
          ×
        </button>
      )}
      <div
        data-cy="TodoLoader"
        className={cn('modal overlay', {
          'is-active': isTemporary || isUpdating || isDeleting,
        })}
      >
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};
