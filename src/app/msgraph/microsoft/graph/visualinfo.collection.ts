import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Json } from './json.entity';
import { ImageInfo } from './imageinfo.entity';
import { VisualInfo } from './visualinfo.entity';
import { JsonModel } from './json.model';
import { ImageInfoModel } from './imageinfo.model';
import { VisualInfoModel } from './visualinfo.model';
import { JsonCollection } from './json.collection';
import { ImageInfoCollection } from './imageinfo.collection';
//#endregion

export class VisualInfoCollection<E extends VisualInfo, M extends VisualInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}