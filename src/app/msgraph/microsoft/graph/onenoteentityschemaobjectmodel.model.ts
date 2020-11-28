import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenoteEntityBaseModelModel } from './onenoteentitybasemodel.model';
import { OnenoteEntitySchemaObjectModel } from './onenoteentityschemaobjectmodel.entity';
import { OnenoteEntitySchemaObjectModelCollection } from './onenoteentityschemaobjectmodel.collection';
//#endregion

export class OnenoteEntitySchemaObjectModelModel<E extends OnenoteEntitySchemaObjectModel> extends OnenoteEntityBaseModelModel<E> {
  //#region ODataApi Properties
  createdDateTime?: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}