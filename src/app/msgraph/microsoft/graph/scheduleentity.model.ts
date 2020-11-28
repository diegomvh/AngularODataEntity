import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ScheduleEntityTheme } from './scheduleentitytheme.enum';
import { ScheduleEntity } from './scheduleentity.complex';
import { ScheduleEntityCollection } from './scheduleentity.collection';
//#endregion

export class ScheduleEntityModel<E extends ScheduleEntity> extends ODataModel<E> {
  //#region ODataApi Properties
  endDateTime?: Date;
  startDateTime?: Date;
  theme: ScheduleEntityTheme;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}