import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface WindowsInformationProtectionApp {
  //#region ODataApi Properties
  denied: boolean;
  description?: string;
  displayName: string;
  productName?: string;
  publisherName?: string;
  //#endregion
}