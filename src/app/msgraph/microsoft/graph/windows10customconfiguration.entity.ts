﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { OmaSetting } from './omasetting.entity';
//#endregion

export interface Windows10CustomConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  omaSettings?: OmaSetting[];
  //#endregion
}