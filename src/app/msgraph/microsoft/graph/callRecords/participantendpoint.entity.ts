import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Endpoint } from './endpoint.entity';
import { IdentitySet } from '../identityset.entity';
import { UserFeedback } from './userfeedback.entity';
//#endregion

export interface ParticipantEndpoint extends Endpoint {
  //#region ODataApi Properties
  identity?: IdentitySet;
  feedback?: UserFeedback;
  //#endregion
}