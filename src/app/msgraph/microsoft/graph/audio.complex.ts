import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface Audio {
  //#region ODataApi Properties
  album?: string;
  albumArtist?: string;
  artist?: string;
  bitrate?: number;
  composers?: string;
  copyright?: string;
  disc?: number;
  discCount?: number;
  duration?: number;
  genre?: string;
  hasDrm?: boolean;
  isVariableBitrate?: boolean;
  title?: string;
  track?: number;
  trackCount?: number;
  year?: number;
  //#endregion
}