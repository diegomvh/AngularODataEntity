import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
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
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { ItemBodyCollection } from './itembody.collection';
import { PatternedRecurrenceCollection } from './patternedrecurrence.collection';
import { ExtensionCollection } from './extension.collection';
import { LinkedResourceCollection } from './linkedresource.collection';
import { TodoTaskCollection } from './todotask.collection';
//#endregion

export class TodoTaskModel<E extends TodoTask> extends EntityModel<E> {
  //#region ODataApi Properties
  body?: ItemBodyModel<ItemBody>;
  bodyLastModifiedDateTime: Date;
  completedDateTime?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  createdDateTime: Date;
  dueDateTime?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  importance: Importance;
  isReminderOn: boolean;
  lastModifiedDateTime: Date;
  recurrence?: PatternedRecurrenceModel<PatternedRecurrence>;
  reminderDateTime?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  status: TaskStatus;
  title?: string;
  extensions?: ExtensionCollection<Extension, ExtensionModel<Extension>>;
  linkedResources?: LinkedResourceCollection<LinkedResource, LinkedResourceModel<LinkedResource>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}