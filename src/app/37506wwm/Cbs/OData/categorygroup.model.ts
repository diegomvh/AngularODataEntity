import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { CategoryGroup } from './categorygroup.entity';
import { CategoryGroupCollection } from './categorygroup.collection';
//#endregion

@Model()
export class CategoryGroupModel<E extends CategoryGroup> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ID!: number;
  
  
  @ModelField()
  DimensionKey?: string;
  
  
  @ModelField()
  Title?: string;
  
  
  @ModelField()
  Description?: string;
  
  
  @ModelField()
  ParentID?: number;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}