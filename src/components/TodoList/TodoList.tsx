import React from 'react';

import { TempTodo } from '../TempTodo';
import { TodoInfo } from '../TodoInfo';

import { Todo } from '../../types/Todo';

interface Props {
  todos: Todo[];
  isAdding: boolean;
  todoTitle: string;
  onDeleteTodo: (todoId: number) => void;
  deletedTodoIds: number[];
  onToggleTodo: (todoId: number, isCompleted: boolean) => void;
  selectedTodoId: number[];
  onChangeTodoTitle: (todoId: number, title: string) => void;
}

export const TodoList: React.FC<Props> = ({
  todos,
  isAdding,
  todoTitle,
  onDeleteTodo,
  deletedTodoIds,
  onToggleTodo,
  selectedTodoId,
  onChangeTodoTitle,
}) => (
  <section className="todoapp__main" data-cy="TodoList">
    {todos.map(todo => (
      <TodoInfo
        key={todo.id}
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        deletedTodoIds={deletedTodoIds}
        onToggleTodo={onToggleTodo}
        selectedTodoId={selectedTodoId}
        onChangeTodoTitle={onChangeTodoTitle}
      />
    ))}

    {isAdding && <TempTodo todoTitle={todoTitle} />}
  </section>
);
