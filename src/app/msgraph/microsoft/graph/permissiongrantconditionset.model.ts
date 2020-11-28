import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { PermissionType } from './permissiontype.enum';
import { PermissionGrantConditionSet } from './permissiongrantconditionset.entity';
import { PermissionGrantConditionSetCollection } from './permissiongrantconditionset.collection';
//#endregion

export class PermissionGrantConditionSetModel<E extends PermissionGrantConditionSet> extends EntityModel<E> {
  //#region ODataApi Properties
  clientApplicationIds?: string[];
  clientApplicationPublisherIds?: string[];
  clientApplicationsFromVerifiedPublisherOnly?: boolean;
  clientApplicationTenantIds?: string[];
  permissionClassification?: string;
  permissions?: string[];
  permissionType?: PermissionType;
  resourceApplication?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}