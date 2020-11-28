import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenoteEntitySchemaObjectModelCollection } from './onenoteentityschemaobjectmodel.collection';
import { IdentitySet } from './identityset.complex';
import { OnenoteEntityHierarchyModel } from './onenoteentityhierarchymodel.entity';
import { IdentitySetModel } from './identityset.model';
import { OnenoteEntityHierarchyModelModel } from './onenoteentityhierarchymodel.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export class OnenoteEntityHierarchyModelCollection<E extends OnenoteEntityHierarchyModel, M extends OnenoteEntityHierarchyModelModel<E>> extends OnenoteEntitySchemaObjectModelCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}