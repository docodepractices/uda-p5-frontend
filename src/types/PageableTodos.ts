import { Todo } from '../types/Todo';
export interface PageableTodos {
    todos: Todo[]
    nextKey: string
  }