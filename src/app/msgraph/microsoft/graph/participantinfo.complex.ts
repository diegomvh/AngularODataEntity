import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { EndpointType } from './endpointtype.enum';
import { IdentitySet } from './identityset.complex';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export interface ParticipantInfo {
  //#region ODataApi Properties
  countryCode?: string;
  endpointType?: EndpointType;
  identity: IdentitySet;
  languageId?: string;
  region?: string;
  //#endregion
}