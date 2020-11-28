import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionApp } from './windowsinformationprotectionapp.entity';
import { WindowsInformationProtectionAppModel } from './windowsinformationprotectionapp.model';
import { WindowsInformationProtectionAppCollection } from './windowsinformationprotectionapp.collection';
//#endregion

export interface WindowsInformationProtectionDesktopApp extends WindowsInformationProtectionApp {
  //#region ODataApi Properties
  binaryName: string;
  binaryVersionHigh?: string;
  binaryVersionLow?: string;
  //#endregion
}