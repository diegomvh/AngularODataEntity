import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from '../entity.entity';
import { Modality } from './modality.enum';
import { Endpoint } from './endpoint.entity';
import { FailureInfo } from './failureinfo.entity';
import { Segment } from './segment.entity';
//#endregion

export interface Session extends Entity {
  //#region ODataApi Properties
  modalities: Modality;
  startDateTime: Date;
  endDateTime: Date;
  caller?: Endpoint;
  callee?: Endpoint;
  failureInfo?: FailureInfo;
  segments?: Segment[];
  //#endregion
}