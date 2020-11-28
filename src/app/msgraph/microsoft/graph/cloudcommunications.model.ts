import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { OnlineMeeting } from './onlinemeeting.entity';
import { CloudCommunications } from './cloudcommunications.entity';
import { Call } from './call.entity';
import { CallRecord } from './callRecords/callrecord.entity';
import { OnlineMeetingModel } from './onlinemeeting.model';
import { CallModel } from './call.model';
import { CallRecordModel } from './callRecords/callrecord.model';
import { OnlineMeetingCollection } from './onlinemeeting.collection';
import { CloudCommunicationsCollection } from './cloudcommunications.collection';
import { CallCollection } from './call.collection';
import { CallRecordCollection } from './callRecords/callrecord.collection';
//#endregion

export class CloudCommunicationsModel<E extends CloudCommunications> extends EntityModel<E> {
  //#region ODataApi Properties
  calls?: CallCollection<Call, CallModel<Call>>;
  callRecords?: CallRecordCollection<CallRecord, CallRecordModel<CallRecord>>;
  onlineMeetings?: OnlineMeetingCollection<OnlineMeeting, OnlineMeetingModel<OnlineMeeting>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}