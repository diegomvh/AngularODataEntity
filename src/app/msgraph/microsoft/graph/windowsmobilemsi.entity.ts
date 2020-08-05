import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileLobApp } from './mobilelobapp.entity';
//#endregion

export interface WindowsMobileMSI extends MobileLobApp {
  //#region ODataApi Properties
  commandLine?: string;
  productCode?: string;
  productVersion?: string;
  ignoreVersionDetection: boolean;
  //#endregion
}