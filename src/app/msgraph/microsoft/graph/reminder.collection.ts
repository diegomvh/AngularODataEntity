import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DateTimeTimeZone } from './datetimetimezone.entity';
import { Location } from './location.entity';
import { Reminder } from './reminder.entity';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { LocationModel } from './location.model';
import { ReminderModel } from './reminder.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { LocationCollection } from './location.collection';
//#endregion

export class ReminderCollection<E extends Reminder, M extends ReminderModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}