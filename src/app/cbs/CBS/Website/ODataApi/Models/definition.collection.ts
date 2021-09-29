import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DefinitionType } from './definitiontype.enum';
import { LinkList } from './linklist.complex';
import { Definition } from './definition.entity';
import { LinkListModel } from './linklist.model';
import { DefinitionModel } from './definition.model';
import { LinkListCollection } from './linklist.collection';
//#endregion

export class DefinitionCollection<E extends Definition, M extends DefinitionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}