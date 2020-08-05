import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MediaDirection } from './mediadirection.enum';
import { Modality } from './modality.enum';
//#endregion

export interface MediaStream {
  //#region ODataApi Properties
  mediaType: Modality;
  label?: string;
  sourceId: string;
  direction: MediaDirection;
  serverMuted: boolean;
  //#endregion
}