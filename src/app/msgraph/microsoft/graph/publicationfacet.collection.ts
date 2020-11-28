import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PublicationFacet } from './publicationfacet.complex';
import { PublicationFacetModel } from './publicationfacet.model';
//#endregion

export class PublicationFacetCollection<E extends PublicationFacet, M extends PublicationFacetModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}