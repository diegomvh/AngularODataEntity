import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileLobApp } from './mobilelobapp.entity';
import { MobileLobAppModel } from './mobilelobapp.model';
import { MobileLobAppCollection } from './mobilelobapp.collection';
//#endregion

export interface WindowsMobileMSI extends MobileLobApp {
  //#region ODataApi Properties
  commandLine?: string;
  ignoreVersionDetection: boolean;
  productCode?: string;
  productVersion?: string;
  //#endregion
}