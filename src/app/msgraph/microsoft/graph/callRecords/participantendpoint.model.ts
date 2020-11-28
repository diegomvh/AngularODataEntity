import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EndpointModel } from './endpoint.model';
import { IdentitySet } from '../identityset.entity';
import { ParticipantEndpoint } from './participantendpoint.entity';
import { UserFeedback } from './userfeedback.entity';
import { IdentitySetModel } from '../identityset.model';
import { UserFeedbackModel } from './userfeedback.model';
import { IdentitySetCollection } from '../identityset.collection';
import { ParticipantEndpointCollection } from './participantendpoint.collection';
import { UserFeedbackCollection } from './userfeedback.collection';
//#endregion

export class ParticipantEndpointModel<E extends ParticipantEndpoint> extends EndpointModel<E> {
  //#region ODataApi Properties
  feedback?: UserFeedbackModel<UserFeedback>;
  identity?: IdentitySetModel<IdentitySet>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}