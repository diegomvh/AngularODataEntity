import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EndpointType } from './endpointtype.enum';
import { IdentitySet } from './identityset.entity';
import { ParticipantInfo } from './participantinfo.entity';
import { IdentitySetModel } from './identityset.model';
import { ParticipantInfoModel } from './participantinfo.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export class ParticipantInfoCollection<E extends ParticipantInfo, M extends ParticipantInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}