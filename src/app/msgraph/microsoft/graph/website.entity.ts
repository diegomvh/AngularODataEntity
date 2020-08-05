import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { WebsiteType } from './websitetype.enum';
//#endregion

export interface Website {
  //#region ODataApi Properties
  type?: WebsiteType;
  address?: string;
  displayName?: string;
  //#endregion
}