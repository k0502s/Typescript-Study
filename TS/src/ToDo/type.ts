import Todo from './Todo';

export interface AppState {
  todos: Todo[];
}

export interface ActionNewTodo {
  type: 'newTodo';
  title: string;
  priority: Priority;
}
export interface ActionDeleteTodo {
  type: 'deleteTodo';
  id: number;
}
export type Action = ActionNewTodo | ActionDeleteTodo;


//enum + 맵드타입 조합 이해
export enum Priority {
  High,
  Medium,
  Low,
}

//enum + 맵드타입 조합 이해
export const PRIORITY_NAME_MAP: { [key in Priority]: string } = {
  [Priority.High]: '높음',
  [Priority.Medium]: '중간',
  [Priority.Low]: '낮음',
};