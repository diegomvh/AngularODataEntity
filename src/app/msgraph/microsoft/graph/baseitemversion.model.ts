import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { IdentitySet } from './identityset.complex';
import { PublicationFacet } from './publicationfacet.complex';
import { BaseItemVersion } from './baseitemversion.entity';
import { IdentitySetModel } from './identityset.model';
import { PublicationFacetModel } from './publicationfacet.model';
import { IdentitySetCollection } from './identityset.collection';
import { PublicationFacetCollection } from './publicationfacet.collection';
import { BaseItemVersionCollection } from './baseitemversion.collection';
//#endregion

export class BaseItemVersionModel<E extends BaseItemVersion> extends EntityModel<E> {
  //#region ODataApi Properties
  lastModifiedBy?: IdentitySetModel<IdentitySet>;
  lastModifiedDateTime?: Date;
  publication?: PublicationFacetModel<PublicationFacet>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}