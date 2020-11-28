import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Json } from './json.complex';
import { ImageInfo } from './imageinfo.complex';
import { JsonModel } from './json.model';
import { ImageInfoModel } from './imageinfo.model';
import { JsonCollection } from './json.collection';
import { ImageInfoCollection } from './imageinfo.collection';
//#endregion

export interface VisualInfo {
  //#region ODataApi Properties
  attribution?: ImageInfo;
  backgroundColor?: string;
  content?: Json;
  description?: string;
  displayText: string;
  //#endregion
}