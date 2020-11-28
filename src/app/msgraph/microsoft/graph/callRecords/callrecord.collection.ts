import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from '../entity.collection';
import { CallType } from './calltype.enum';
import { Modality } from './modality.enum';
import { IdentitySet } from '../identityset.complex';
import { CallRecord } from './callrecord.entity';
import { Session } from './session.entity';
import { IdentitySetModel } from '../identityset.model';
import { CallRecordModel } from './callrecord.model';
import { SessionModel } from './session.model';
import { IdentitySetCollection } from '../identityset.collection';
import { SessionCollection } from './session.collection';
//#endregion

export class CallRecordCollection<E extends CallRecord, M extends CallRecordModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}