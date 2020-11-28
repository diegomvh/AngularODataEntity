import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { PermissionClassificationType } from './permissionclassificationtype.enum';
import { DelegatedPermissionClassification } from './delegatedpermissionclassification.entity';
import { DelegatedPermissionClassificationCollection } from './delegatedpermissionclassification.collection';
//#endregion

export class DelegatedPermissionClassificationModel<E extends DelegatedPermissionClassification> extends EntityModel<E> {
  //#region ODataApi Properties
  classification?: PermissionClassificationType;
  permissionId?: string;
  permissionName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}