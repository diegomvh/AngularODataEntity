import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from '../entity.entity';
import { Endpoint } from './endpoint.entity';
import { FailureInfo } from './failureinfo.entity';
import { Media } from './media.entity';
import { EntityModel } from '../entity.model';
import { EndpointModel } from './endpoint.model';
import { FailureInfoModel } from './failureinfo.model';
import { MediaModel } from './media.model';
import { EntityCollection } from '../entity.collection';
import { EndpointCollection } from './endpoint.collection';
import { FailureInfoCollection } from './failureinfo.collection';
import { MediaCollection } from './media.collection';
//#endregion

export interface Segment extends Entity {
  //#region ODataApi Properties
  callee?: Endpoint;
  caller?: Endpoint;
  endDateTime: Date;
  failureInfo?: FailureInfo;
  media?: Media[];
  startDateTime: Date;
  //#endregion
}