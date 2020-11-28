import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
import { PlannerExternalReference } from './plannerexternalreference.entity';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
import { PlannerExternalReferenceCollection } from './plannerexternalreference.collection';
//#endregion

export class PlannerExternalReferenceModel<E extends PlannerExternalReference> extends ODataModel<E> {
  //#region ODataApi Properties
  alias?: string;
  lastModifiedBy?: IdentitySetModel<IdentitySet>;
  lastModifiedDateTime?: Date;
  previewPriority?: string;
  type?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}