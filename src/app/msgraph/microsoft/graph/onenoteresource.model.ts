import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenoteEntityBaseModelModel } from './onenoteentitybasemodel.model';
import { OnenoteResource } from './onenoteresource.entity';
import { OnenoteResourceCollection } from './onenoteresource.collection';
//#endregion

export class OnenoteResourceModel<E extends OnenoteResource> extends OnenoteEntityBaseModelModel<E> {
  //#region ODataApi Properties
  content?: any;
  contentUrl?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}