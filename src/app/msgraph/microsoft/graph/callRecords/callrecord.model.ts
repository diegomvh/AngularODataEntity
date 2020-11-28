import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from '../entity.model';
import { CallType } from './calltype.enum';
import { Modality } from './modality.enum';
import { IdentitySet } from '../identityset.complex';
import { CallRecord } from './callrecord.entity';
import { Session } from './session.entity';
import { IdentitySetModel } from '../identityset.model';
import { SessionModel } from './session.model';
import { IdentitySetCollection } from '../identityset.collection';
import { CallRecordCollection } from './callrecord.collection';
import { SessionCollection } from './session.collection';
//#endregion

export class CallRecordModel<E extends CallRecord> extends EntityModel<E> {
  //#region ODataApi Properties
  endDateTime: Date;
  joinWebUrl?: string;
  lastModifiedDateTime: Date;
  modalities: Modality;
  organizer?: IdentitySetModel<IdentitySet>;
  participants?: IdentitySetCollection<IdentitySet, IdentitySetModel<IdentitySet>>;
  startDateTime: Date;
  type: CallType;
  version: number;
  sessions?: SessionCollection<Session, SessionModel<Session>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}