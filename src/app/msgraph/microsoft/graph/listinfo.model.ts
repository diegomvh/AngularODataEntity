import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ListInfo } from './listinfo.entity';
import { ListInfoCollection } from './listinfo.collection';
//#endregion

export class ListInfoModel<E extends ListInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  contentTypesEnabled?: boolean;
  hidden?: boolean;
  template?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}