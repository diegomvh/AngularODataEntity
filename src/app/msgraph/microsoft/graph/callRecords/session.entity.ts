import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from '../entity.entity';
import { Modality } from './modality.enum';
import { Endpoint } from './endpoint.entity';
import { FailureInfo } from './failureinfo.entity';
import { Segment } from './segment.entity';
import { EntityModel } from '../entity.model';
import { EndpointModel } from './endpoint.model';
import { FailureInfoModel } from './failureinfo.model';
import { SegmentModel } from './segment.model';
import { EntityCollection } from '../entity.collection';
import { EndpointCollection } from './endpoint.collection';
import { FailureInfoCollection } from './failureinfo.collection';
import { SegmentCollection } from './segment.collection';
//#endregion

export interface Session extends Entity {
  //#region ODataApi Properties
  callee?: Endpoint;
  caller?: Endpoint;
  endDateTime: Date;
  failureInfo?: FailureInfo;
  modalities: Modality;
  startDateTime: Date;
  segments?: Segment[];
  //#endregion
}