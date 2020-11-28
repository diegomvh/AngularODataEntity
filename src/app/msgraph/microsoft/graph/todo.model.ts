import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Todo } from './todo.entity';
import { TodoTaskList } from './todotasklist.entity';
import { TodoTaskListModel } from './todotasklist.model';
import { TodoCollection } from './todo.collection';
import { TodoTaskListCollection } from './todotasklist.collection';
//#endregion

export class TodoModel<E extends Todo> extends EntityModel<E> {
  //#region ODataApi Properties
  lists?: TodoTaskListCollection<TodoTaskList, TodoTaskListModel<TodoTaskList>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}