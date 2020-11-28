import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Json } from './json.complex';
import { ImageInfo } from './imageinfo.complex';
import { VisualInfo } from './visualinfo.complex';
import { JsonModel } from './json.model';
import { ImageInfoModel } from './imageinfo.model';
import { JsonCollection } from './json.collection';
import { ImageInfoCollection } from './imageinfo.collection';
import { VisualInfoCollection } from './visualinfo.collection';
//#endregion

export class VisualInfoModel<E extends VisualInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  attribution?: ImageInfoModel<ImageInfo>;
  backgroundColor?: string;
  content?: JsonModel<Json>;
  description?: string;
  displayText: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}