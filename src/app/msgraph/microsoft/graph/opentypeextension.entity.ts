import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Extension } from './extension.entity';
import { ExtensionModel } from './extension.model';
import { ExtensionCollection } from './extension.collection';
//#endregion

export interface OpenTypeExtension extends Extension {
  //#region ODataApi Properties
  extensionName: string;
  //#endregion
}