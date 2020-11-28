import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Endpoint } from './endpoint.entity';
import { IdentitySet } from '../identityset.entity';
import { UserFeedback } from './userfeedback.entity';
import { IdentitySetModel } from '../identityset.model';
import { EndpointModel } from './endpoint.model';
import { UserFeedbackModel } from './userfeedback.model';
import { IdentitySetCollection } from '../identityset.collection';
import { EndpointCollection } from './endpoint.collection';
import { UserFeedbackCollection } from './userfeedback.collection';
//#endregion

export interface ParticipantEndpoint extends Endpoint {
  //#region ODataApi Properties
  feedback?: UserFeedback;
  identity?: IdentitySet;
  //#endregion
}