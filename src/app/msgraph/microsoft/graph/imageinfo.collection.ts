import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ImageInfo } from './imageinfo.entity';
import { ImageInfoModel } from './imageinfo.model';
//#endregion

export class ImageInfoCollection<E extends ImageInfo, M extends ImageInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}