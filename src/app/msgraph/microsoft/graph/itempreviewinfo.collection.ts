import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ItemPreviewInfo } from './itempreviewinfo.entity';
import { ItemPreviewInfoModel } from './itempreviewinfo.model';
//#endregion

export class ItemPreviewInfoCollection<E extends ItemPreviewInfo, M extends ItemPreviewInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}