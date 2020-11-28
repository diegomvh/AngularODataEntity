import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenoteEntityBaseModelCollection } from './onenoteentitybasemodel.collection';
import { OnenoteEntitySchemaObjectModel } from './onenoteentityschemaobjectmodel.entity';
import { OnenoteEntitySchemaObjectModelModel } from './onenoteentityschemaobjectmodel.model';
//#endregion

export class OnenoteEntitySchemaObjectModelCollection<E extends OnenoteEntitySchemaObjectModel, M extends OnenoteEntitySchemaObjectModelModel<E>> extends OnenoteEntityBaseModelCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}