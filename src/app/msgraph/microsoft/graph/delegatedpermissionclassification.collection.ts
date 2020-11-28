import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { PermissionClassificationType } from './permissionclassificationtype.enum';
import { DelegatedPermissionClassification } from './delegatedpermissionclassification.entity';
import { DelegatedPermissionClassificationModel } from './delegatedpermissionclassification.model';
//#endregion

export class DelegatedPermissionClassificationCollection<E extends DelegatedPermissionClassification, M extends DelegatedPermissionClassificationModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}