import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppReturnCodeType } from './win32lobappreturncodetype.enum';
//#endregion

export interface Win32LobAppReturnCode {
  //#region ODataApi Properties
  returnCode: number;
  type: Win32LobAppReturnCodeType;
  //#endregion
}