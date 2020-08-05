import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionApp } from './windowsinformationprotectionapp.entity';
//#endregion

export interface WindowsInformationProtectionDesktopApp extends WindowsInformationProtectionApp {
  //#region ODataApi Properties
  binaryName: string;
  binaryVersionLow?: string;
  binaryVersionHigh?: string;
  //#endregion
}