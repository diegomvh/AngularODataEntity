import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PublicationFacet } from './publicationfacet.complex';
import { PublicationFacetCollection } from './publicationfacet.collection';
//#endregion

export class PublicationFacetModel<E extends PublicationFacet> extends ODataModel<E> {
  //#region ODataApi Properties
  level?: string;
  versionId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}