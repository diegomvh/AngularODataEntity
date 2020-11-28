import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Todo } from './todo.entity';
import { TodoTaskList } from './todotasklist.entity';
import { TodoModel } from './todo.model';
import { TodoTaskListModel } from './todotasklist.model';
import { TodoTaskListCollection } from './todotasklist.collection';
//#endregion

export class TodoCollection<E extends Todo, M extends TodoModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}