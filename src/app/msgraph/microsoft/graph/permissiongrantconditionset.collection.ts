import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { PermissionType } from './permissiontype.enum';
import { PermissionGrantConditionSet } from './permissiongrantconditionset.entity';
import { PermissionGrantConditionSetModel } from './permissiongrantconditionset.model';
//#endregion

export class PermissionGrantConditionSetCollection<E extends PermissionGrantConditionSet, M extends PermissionGrantConditionSetModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}