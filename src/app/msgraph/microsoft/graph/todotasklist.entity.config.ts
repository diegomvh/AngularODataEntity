import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TodoTaskList } from './todotasklist.entity';
import { TodoTaskListModel } from './todotasklist.model';
import { TodoTaskListCollection } from './todotasklist.collection';
//#endregion

export const TodoTaskListConfig = {
  name: "todoTaskList",
  base: "microsoft.graph.entity",
  model: TodoTaskListModel,
  collection: TodoTaskListCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    isOwner: {type: 'Edm.Boolean', nullable: false},
    isShared: {type: 'Edm.Boolean', nullable: false},
    wellknownListName: {type: 'graph.wellknownListName', nullable: false},
    extensions: {type: 'graph.extension', collection: true, navigation: true},
    tasks: {type: 'graph.todoTask', collection: true, navigation: true}
  }
} as StructuredTypeConfig<TodoTaskList>;