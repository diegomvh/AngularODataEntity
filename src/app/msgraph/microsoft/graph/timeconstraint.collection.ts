import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ActivityDomain } from './activitydomain.enum';
import { TimeSlot } from './timeslot.entity';
import { TimeConstraint } from './timeconstraint.entity';
import { TimeSlotModel } from './timeslot.model';
import { TimeConstraintModel } from './timeconstraint.model';
import { TimeSlotCollection } from './timeslot.collection';
//#endregion

export class TimeConstraintCollection<E extends TimeConstraint, M extends TimeConstraintModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}