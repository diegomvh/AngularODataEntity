import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Importance } from './importance.enum';
import { TaskStatus } from './taskstatus.enum';
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { ItemBody } from './itembody.complex';
import { PatternedRecurrence } from './patternedrecurrence.complex';
import { Extension } from './extension.entity';
import { LinkedResource } from './linkedresource.entity';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { ItemBodyModel } from './itembody.model';
import { PatternedRecurrenceModel } from './patternedrecurrence.model';
import { EntityModel } from './entity.model';
import { ExtensionModel } from './extension.model';
import { LinkedResourceModel } from './linkedresource.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { ItemBodyCollection } from './itembody.collection';
import { PatternedRecurrenceCollection } from './patternedrecurrence.collection';
import { EntityCollection } from './entity.collection';
import { ExtensionCollection } from './extension.collection';
import { LinkedResourceCollection } from './linkedresource.collection';
//#endregion

export interface TodoTask extends Entity {
  //#region ODataApi Properties
  body?: ItemBody;
  bodyLastModifiedDateTime: Date;
  completedDateTime?: DateTimeTimeZone;
  createdDateTime: Date;
  dueDateTime?: DateTimeTimeZone;
  importance: Importance;
  isReminderOn: boolean;
  lastModifiedDateTime: Date;
  recurrence?: PatternedRecurrence;
  reminderDateTime?: DateTimeTimeZone;
  status: TaskStatus;
  title?: string;
  extensions?: Extension[];
  linkedResources?: LinkedResource[];
  //#endregion
}