import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DayOfWeek } from './dayofweek.enum';
import { WorkingHours } from './workinghours.entity';
import { TimeZoneBase } from './timezonebase.entity';
import { WorkingHoursModel } from './workinghours.model';
import { TimeZoneBaseModel } from './timezonebase.model';
import { TimeZoneBaseCollection } from './timezonebase.collection';
//#endregion

export class WorkingHoursCollection<E extends WorkingHours, M extends WorkingHoursModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}