import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Json } from './json.entity';
import { ImageInfo } from './imageinfo.entity';
//#endregion

export interface VisualInfo {
  //#region ODataApi Properties
  attribution?: ImageInfo;
  backgroundColor?: string;
  description?: string;
  displayText: string;
  content?: Json;
  //#endregion
}