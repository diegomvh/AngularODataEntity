﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Location } from './location.entity';
//#endregion

export interface EventLocation extends Location {
  //#region ODataApi Properties
  buildingInfo?: string;
  //#endregion
}