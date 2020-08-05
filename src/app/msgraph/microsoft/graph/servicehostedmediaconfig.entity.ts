import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MediaConfig } from './mediaconfig.entity';
import { MediaInfo } from './mediainfo.entity';
//#endregion

export interface ServiceHostedMediaConfig extends MediaConfig {
  //#region ODataApi Properties
  preFetchMedia?: MediaInfo[];
  //#endregion
}