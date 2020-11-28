import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
import { PlannerExternalReference } from './plannerexternalreference.entity';
import { IdentitySetModel } from './identityset.model';
import { PlannerExternalReferenceModel } from './plannerexternalreference.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export class PlannerExternalReferenceCollection<E extends PlannerExternalReference, M extends PlannerExternalReferenceModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}