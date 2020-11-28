import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WellknownListName } from './wellknownlistname.enum';
import { Extension } from './extension.entity';
import { TodoTaskList } from './todotasklist.entity';
import { TodoTask } from './todotask.entity';
import { ExtensionModel } from './extension.model';
import { TodoTaskModel } from './todotask.model';
import { ExtensionCollection } from './extension.collection';
import { TodoTaskListCollection } from './todotasklist.collection';
import { TodoTaskCollection } from './todotask.collection';
//#endregion

export class TodoTaskListModel<E extends TodoTaskList> extends EntityModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  isOwner: boolean;
  isShared: boolean;
  wellknownListName: WellknownListName;
  extensions?: ExtensionCollection<Extension, ExtensionModel<Extension>>;
  tasks?: TodoTaskCollection<TodoTask, TodoTaskModel<TodoTask>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}