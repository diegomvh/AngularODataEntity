import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OmaSettingCollection } from './omasetting.collection';
import { OmaSettingStringXml } from './omasettingstringxml.complex';
import { OmaSettingStringXmlModel } from './omasettingstringxml.model';
//#endregion

export class OmaSettingStringXmlCollection<E extends OmaSettingStringXml, M extends OmaSettingStringXmlModel<E>> extends OmaSettingCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}