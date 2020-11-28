import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LocaleInfo } from './localeinfo.entity';
import { LocaleInfoModel } from './localeinfo.model';
//#endregion

export class LocaleInfoCollection<E extends LocaleInfo, M extends LocaleInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}