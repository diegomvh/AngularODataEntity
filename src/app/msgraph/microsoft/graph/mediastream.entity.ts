import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MediaDirection } from './mediadirection.enum';
import { Modality } from './modality.enum';
//#endregion

export interface MediaStream {
  //#region ODataApi Properties
  direction: MediaDirection;
  label?: string;
  mediaType: Modality;
  serverMuted: boolean;
  sourceId: string;
  //#endregion
}