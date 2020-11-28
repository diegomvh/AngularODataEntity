import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataSingletonService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { OnlineMeeting } from './onlinemeeting.entity';
import { CloudCommunications } from './cloudcommunications.entity';
import { Call } from './call.entity';
import { CallRecord } from './callRecords/callrecord.entity';
import { OnlineMeetingModel } from './onlinemeeting.model';
import { CloudCommunicationsModel } from './cloudcommunications.model';
import { CallModel } from './call.model';
import { CallRecordModel } from './callRecords/callrecord.model';
import { OnlineMeetingCollection } from './onlinemeeting.collection';
import { CloudCommunicationsCollection } from './cloudcommunications.collection';
import { CallCollection } from './call.collection';
import { CallRecordCollection } from './callRecords/callrecord.collection';
//#endregion

@Injectable()
export class CommunicationsService extends ODataSingletonService<CloudCommunications> {
  constructor(protected client: ODataClient) {
    super(client, 'communications', 'microsoft.graph.cloudCommunications');
  }
  
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}