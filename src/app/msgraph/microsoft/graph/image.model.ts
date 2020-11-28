import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Image } from './image.entity';
import { ImageCollection } from './image.collection';
//#endregion

export class ImageModel<E extends Image> extends ODataModel<E> {
  //#region ODataApi Properties
  height?: number;
  width?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}