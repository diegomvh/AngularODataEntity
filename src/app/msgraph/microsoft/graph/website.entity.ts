import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { WebsiteType } from './websitetype.enum';
//#endregion

export interface Website {
  //#region ODataApi Properties
  address?: string;
  displayName?: string;
  type?: WebsiteType;
  //#endregion
}