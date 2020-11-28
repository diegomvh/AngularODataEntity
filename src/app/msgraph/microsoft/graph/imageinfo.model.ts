import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ImageInfo } from './imageinfo.entity';
import { ImageInfoCollection } from './imageinfo.collection';
//#endregion

export class ImageInfoModel<E extends ImageInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  addImageQuery?: boolean;
  alternateText?: string;
  alternativeText?: string;
  iconUrl?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}