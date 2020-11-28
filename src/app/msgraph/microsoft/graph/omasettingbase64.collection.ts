import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OmaSettingCollection } from './omasetting.collection';
import { OmaSettingBase64 } from './omasettingbase64.entity';
import { OmaSettingBase64Model } from './omasettingbase64.model';
//#endregion

export class OmaSettingBase64Collection<E extends OmaSettingBase64, M extends OmaSettingBase64Model<E>> extends OmaSettingCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}