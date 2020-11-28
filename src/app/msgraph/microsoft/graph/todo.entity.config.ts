import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Todo } from './todo.entity';
import { TodoModel } from './todo.model';
import { TodoCollection } from './todo.collection';
//#endregion

export const TodoConfig = {
  name: "todo",
  base: "microsoft.graph.entity",
  model: TodoModel,
  collection: TodoCollection,
  annotations: [],
  fields: {
    lists: {type: 'graph.todoTaskList', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Todo>;