import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface Photo {
  //#region ODataApi Properties
  cameraMake?: string;
  cameraModel?: string;
  exposureDenominator?: number;
  exposureNumerator?: number;
  fNumber?: number;
  focalLength?: number;
  iso?: number;
  orientation?: number;
  takenDateTime?: Date;
  //#endregion
}