import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WellknownListName } from './wellknownlistname.enum';
import { Extension } from './extension.entity';
import { TodoTaskList } from './todotasklist.entity';
import { TodoTask } from './todotask.entity';
import { ExtensionModel } from './extension.model';
import { TodoTaskListModel } from './todotasklist.model';
import { TodoTaskModel } from './todotask.model';
import { ExtensionCollection } from './extension.collection';
import { TodoTaskCollection } from './todotask.collection';
//#endregion

export class TodoTaskListCollection<E extends TodoTaskList, M extends TodoTaskListModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public delta(options?: HttpOptions): Observable<TodoTaskListCollection<TodoTaskList, TodoTaskListModel<TodoTaskList>>> {
    var res = this._function<null, TodoTaskList>('microsoft.graph.delta');
    res.segment.entitySet('');
    return res.call(null, 'collection', options) as Observable<TodoTaskListCollection<TodoTaskList, TodoTaskListModel<TodoTaskList>>>;
  }
  //#endregion
}