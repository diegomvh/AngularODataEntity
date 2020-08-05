import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ResourceReference } from './resourcereference.entity';
import { InsightIdentity } from './insightidentity.entity';
//#endregion

export interface SharingDetail {
  //#region ODataApi Properties
  sharedBy?: InsightIdentity;
  sharedDateTime?: Date;
  sharingSubject?: string;
  sharingType?: string;
  sharingReference?: ResourceReference;
  //#endregion
}