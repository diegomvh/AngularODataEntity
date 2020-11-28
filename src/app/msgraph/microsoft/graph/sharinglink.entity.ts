import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Identity } from './identity.entity';
import { IdentityModel } from './identity.model';
import { IdentityCollection } from './identity.collection';
//#endregion

export interface SharingLink {
  //#region ODataApi Properties
  application?: Identity;
  preventsDownload?: boolean;
  scope?: string;
  type?: string;
  webHtml?: string;
  webUrl?: string;
  //#endregion
}