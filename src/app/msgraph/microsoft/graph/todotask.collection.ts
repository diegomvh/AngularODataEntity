import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Importance } from './importance.enum';
import { TaskStatus } from './taskstatus.enum';
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { ItemBody } from './itembody.complex';
import { PatternedRecurrence } from './patternedrecurrence.complex';
import { Extension } from './extension.entity';
import { LinkedResource } from './linkedresource.entity';
import { TodoTask } from './todotask.entity';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { ItemBodyModel } from './itembody.model';
import { PatternedRecurrenceModel } from './patternedrecurrence.model';
import { ExtensionModel } from './extension.model';
import { LinkedResourceModel } from './linkedresource.model';
import { TodoTaskModel } from './todotask.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { ItemBodyCollection } from './itembody.collection';
import { PatternedRecurrenceCollection } from './patternedrecurrence.collection';
import { ExtensionCollection } from './extension.collection';
import { LinkedResourceCollection } from './linkedresource.collection';
//#endregion

export class TodoTaskCollection<E extends TodoTask, M extends TodoTaskModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public delta(options?: HttpOptions): Observable<TodoTaskCollection<TodoTask, TodoTaskModel<TodoTask>>> {
    var res = this._function<null, TodoTask>('microsoft.graph.delta');
    res.segment.entitySet('');
    return res.call(null, 'collection', options) as Observable<TodoTaskCollection<TodoTask, TodoTaskModel<TodoTask>>>;
  }
  //#endregion
}