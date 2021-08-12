import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { DefinitionType } from './definitiontype.enum';
import { LinkList } from './linklist.complex';
import { Definition } from './definition.entity';
import { LinkListModel } from './linklist.model';
import { DefinitionModel } from './definition.model';
import { LinkListCollection } from './linklist.collection';
//#endregion

export class DefinitionCollection<E extends Definition, M extends DefinitionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}