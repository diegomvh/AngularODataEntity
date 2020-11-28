import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from '../entity.model';
import { Modality } from './modality.enum';
import { Endpoint } from './endpoint.entity';
import { FailureInfo } from './failureinfo.entity';
import { Session } from './session.entity';
import { Segment } from './segment.entity';
import { EndpointModel } from './endpoint.model';
import { FailureInfoModel } from './failureinfo.model';
import { SegmentModel } from './segment.model';
import { EndpointCollection } from './endpoint.collection';
import { FailureInfoCollection } from './failureinfo.collection';
import { SessionCollection } from './session.collection';
import { SegmentCollection } from './segment.collection';
//#endregion

export class SessionModel<E extends Session> extends EntityModel<E> {
  //#region ODataApi Properties
  callee?: EndpointModel<Endpoint>;
  caller?: EndpointModel<Endpoint>;
  endDateTime: Date;
  failureInfo?: FailureInfoModel<FailureInfo>;
  modalities: Modality;
  startDateTime: Date;
  segments?: SegmentCollection<Segment, SegmentModel<Segment>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}