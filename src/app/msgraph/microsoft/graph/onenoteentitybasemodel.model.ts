import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { OnenoteEntityBaseModel } from './onenoteentitybasemodel.entity';
import { OnenoteEntityBaseModelCollection } from './onenoteentitybasemodel.collection';
//#endregion

export class OnenoteEntityBaseModelModel<E extends OnenoteEntityBaseModel> extends EntityModel<E> {
  //#region ODataApi Properties
  self?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}