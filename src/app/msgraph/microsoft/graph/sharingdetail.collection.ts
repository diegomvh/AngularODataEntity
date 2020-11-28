import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { InsightIdentity } from './insightidentity.entity';
import { ResourceReference } from './resourcereference.entity';
import { SharingDetail } from './sharingdetail.entity';
import { InsightIdentityModel } from './insightidentity.model';
import { ResourceReferenceModel } from './resourcereference.model';
import { SharingDetailModel } from './sharingdetail.model';
import { InsightIdentityCollection } from './insightidentity.collection';
import { ResourceReferenceCollection } from './resourcereference.collection';
//#endregion

export class SharingDetailCollection<E extends SharingDetail, M extends SharingDetailModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}