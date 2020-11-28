import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EndpointType } from './endpointtype.enum';
import { IdentitySet } from './identityset.complex';
import { ParticipantInfo } from './participantinfo.complex';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
import { ParticipantInfoCollection } from './participantinfo.collection';
//#endregion

export class ParticipantInfoModel<E extends ParticipantInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  countryCode?: string;
  endpointType?: EndpointType;
  identity: IdentitySetModel<IdentitySet>;
  languageId?: string;
  region?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}