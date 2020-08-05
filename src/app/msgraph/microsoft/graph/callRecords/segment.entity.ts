import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from '../entity.entity';
import { Endpoint } from './endpoint.entity';
import { FailureInfo } from './failureinfo.entity';
import { Media } from './media.entity';
//#endregion

export interface Segment extends Entity {
  //#region ODataApi Properties
  startDateTime: Date;
  endDateTime: Date;
  caller?: Endpoint;
  callee?: Endpoint;
  failureInfo?: FailureInfo;
  media?: Media[];
  //#endregion
}