import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Identity } from './identity.complex';
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