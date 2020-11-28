import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MediaConfig } from './mediaconfig.complex';
import { MediaConfigModel } from './mediaconfig.model';
import { MediaConfigCollection } from './mediaconfig.collection';
//#endregion

export interface AppHostedMediaConfig extends MediaConfig {
  //#region ODataApi Properties
  blob?: string;
  //#endregion
}