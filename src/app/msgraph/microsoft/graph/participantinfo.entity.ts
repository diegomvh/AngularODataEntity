import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { EndpointType } from './endpointtype.enum';
import { IdentitySet } from './identityset.entity';
//#endregion

export interface ParticipantInfo {
  //#region ODataApi Properties
  identity: IdentitySet;
  endpointType?: EndpointType;
  region?: string;
  languageId?: string;
  countryCode?: string;
  //#endregion
}