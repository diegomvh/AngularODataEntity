import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SystemFacet } from './systemfacet.entity';
import { SystemFacetModel } from './systemfacet.model';
//#endregion

export class SystemFacetCollection<E extends SystemFacet, M extends SystemFacetModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}