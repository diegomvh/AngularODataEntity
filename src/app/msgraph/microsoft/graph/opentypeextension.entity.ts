import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Extension } from './extension.entity';
//#endregion

export interface OpenTypeExtension extends Extension {
  //#region ODataApi Properties
  extensionName: string;
  //#endregion
}