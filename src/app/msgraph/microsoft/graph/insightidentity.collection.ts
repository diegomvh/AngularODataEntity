import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { InsightIdentity } from './insightidentity.entity';
import { InsightIdentityModel } from './insightidentity.model';
//#endregion

export class InsightIdentityCollection<E extends InsightIdentity, M extends InsightIdentityModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}