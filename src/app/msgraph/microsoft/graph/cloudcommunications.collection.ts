import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { OnlineMeeting } from './onlinemeeting.entity';
import { CloudCommunications } from './cloudcommunications.entity';
import { Call } from './call.entity';
import { CallRecord } from './callRecords/callrecord.entity';
import { OnlineMeetingModel } from './onlinemeeting.model';
import { CloudCommunicationsModel } from './cloudcommunications.model';
import { CallModel } from './call.model';
import { CallRecordModel } from './callRecords/callrecord.model';
import { OnlineMeetingCollection } from './onlinemeeting.collection';
import { CallCollection } from './call.collection';
import { CallRecordCollection } from './callRecords/callrecord.collection';
//#endregion

export class CloudCommunicationsCollection<E extends CloudCommunications, M extends CloudCommunicationsModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}