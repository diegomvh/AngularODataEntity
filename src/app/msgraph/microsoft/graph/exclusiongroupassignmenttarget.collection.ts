import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { GroupAssignmentTargetCollection } from './groupassignmenttarget.collection';
import { ExclusionGroupAssignmentTarget } from './exclusiongroupassignmenttarget.entity';
import { ExclusionGroupAssignmentTargetModel } from './exclusiongroupassignmenttarget.model';
//#endregion

export class ExclusionGroupAssignmentTargetCollection<E extends ExclusionGroupAssignmentTarget, M extends ExclusionGroupAssignmentTargetModel<E>> extends GroupAssignmentTargetCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}