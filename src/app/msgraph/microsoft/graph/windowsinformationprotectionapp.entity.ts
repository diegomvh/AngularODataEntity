import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface WindowsInformationProtectionApp {
  //#region ODataApi Properties
  displayName: string;
  description?: string;
  publisherName?: string;
  productName?: string;
  denied: boolean;
  //#endregion
}