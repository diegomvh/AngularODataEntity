import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { IdentitySet } from './identityset.complex';
import { PublicationFacet } from './publicationfacet.complex';
import { BaseItemVersion } from './baseitemversion.entity';
import { IdentitySetModel } from './identityset.model';
import { PublicationFacetModel } from './publicationfacet.model';
import { BaseItemVersionModel } from './baseitemversion.model';
import { IdentitySetCollection } from './identityset.collection';
import { PublicationFacetCollection } from './publicationfacet.collection';
//#endregion

export class BaseItemVersionCollection<E extends BaseItemVersion, M extends BaseItemVersionModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}