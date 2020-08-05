import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MediaConfig } from './mediaconfig.entity';
//#endregion

export interface AppHostedMediaConfig extends MediaConfig {
  //#region ODataApi Properties
  blob?: string;
  //#endregion
}