import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Json } from './json.entity';
import { ImageInfo } from './imageinfo.entity';
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