import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ScheduleEntityTheme } from './scheduleentitytheme.enum';
import { ScheduleEntity } from './scheduleentity.entity';
import { ScheduleEntityModel } from './scheduleentity.model';
//#endregion

export class ScheduleEntityCollection<E extends ScheduleEntity, M extends ScheduleEntityModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}