import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeTrackedEntityCollection } from './changetrackedentity.collection';
import { SchedulingGroup } from './schedulinggroup.entity';
import { SchedulingGroupModel } from './schedulinggroup.model';
//#endregion

export class SchedulingGroupCollection<E extends SchedulingGroup, M extends SchedulingGroupModel<E>> extends ChangeTrackedEntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}