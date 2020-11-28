import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeTrackedEntityModel } from './changetrackedentity.model';
import { SchedulingGroup } from './schedulinggroup.entity';
import { SchedulingGroupCollection } from './schedulinggroup.collection';
//#endregion

export class SchedulingGroupModel<E extends SchedulingGroup> extends ChangeTrackedEntityModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  isActive?: boolean;
  userIds?: string[];
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}