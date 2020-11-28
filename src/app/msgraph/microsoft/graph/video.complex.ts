import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface Video {
  //#region ODataApi Properties
  audioBitsPerSample?: number;
  audioChannels?: number;
  audioFormat?: string;
  audioSamplesPerSecond?: number;
  bitrate?: number;
  duration?: number;
  fourCC?: string;
  frameRate?: number;
  height?: number;
  width?: number;
  //#endregion
}