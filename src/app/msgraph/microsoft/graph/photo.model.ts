import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Photo } from './photo.complex';
import { PhotoCollection } from './photo.collection';
//#endregion

export class PhotoModel<E extends Photo> extends ODataModel<E> {
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
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}