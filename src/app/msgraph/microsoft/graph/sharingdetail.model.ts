import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { InsightIdentity } from './insightidentity.entity';
import { ResourceReference } from './resourcereference.entity';
import { SharingDetail } from './sharingdetail.entity';
import { InsightIdentityModel } from './insightidentity.model';
import { ResourceReferenceModel } from './resourcereference.model';
import { InsightIdentityCollection } from './insightidentity.collection';
import { ResourceReferenceCollection } from './resourcereference.collection';
import { SharingDetailCollection } from './sharingdetail.collection';
//#endregion

export class SharingDetailModel<E extends SharingDetail> extends ODataModel<E> {
  //#region ODataApi Properties
  sharedBy?: InsightIdentityModel<InsightIdentity>;
  sharedDateTime?: Date;
  sharingReference?: ResourceReferenceModel<ResourceReference>;
  sharingSubject?: string;
  sharingType?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}