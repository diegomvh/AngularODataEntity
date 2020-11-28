import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MediaConfig } from './mediaconfig.complex';
import { MediaInfo } from './mediainfo.complex';
import { MediaConfigModel } from './mediaconfig.model';
import { MediaInfoModel } from './mediainfo.model';
import { MediaConfigCollection } from './mediaconfig.collection';
import { MediaInfoCollection } from './mediainfo.collection';
//#endregion

export interface ServiceHostedMediaConfig extends MediaConfig {
  //#region ODataApi Properties
  preFetchMedia?: MediaInfo[];
  //#endregion
}