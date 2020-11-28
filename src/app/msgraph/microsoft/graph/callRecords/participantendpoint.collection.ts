import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EndpointCollection } from './endpoint.collection';
import { IdentitySet } from '../identityset.entity';
import { ParticipantEndpoint } from './participantendpoint.entity';
import { UserFeedback } from './userfeedback.entity';
import { IdentitySetModel } from '../identityset.model';
import { ParticipantEndpointModel } from './participantendpoint.model';
import { UserFeedbackModel } from './userfeedback.model';
import { IdentitySetCollection } from '../identityset.collection';
import { UserFeedbackCollection } from './userfeedback.collection';
//#endregion

export class ParticipantEndpointCollection<E extends ParticipantEndpoint, M extends ParticipantEndpointModel<E>> extends EndpointCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}