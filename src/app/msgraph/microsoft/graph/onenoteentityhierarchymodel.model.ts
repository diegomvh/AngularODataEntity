import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenoteEntitySchemaObjectModelModel } from './onenoteentityschemaobjectmodel.model';
import { IdentitySet } from './identityset.complex';
import { OnenoteEntityHierarchyModel } from './onenoteentityhierarchymodel.entity';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
import { OnenoteEntityHierarchyModelCollection } from './onenoteentityhierarchymodel.collection';
//#endregion

export class OnenoteEntityHierarchyModelModel<E extends OnenoteEntityHierarchyModel> extends OnenoteEntitySchemaObjectModelModel<E> {
  //#region ODataApi Properties
  createdBy?: IdentitySetModel<IdentitySet>;
  displayName?: string;
  lastModifiedBy?: IdentitySetModel<IdentitySet>;
  lastModifiedDateTime?: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}