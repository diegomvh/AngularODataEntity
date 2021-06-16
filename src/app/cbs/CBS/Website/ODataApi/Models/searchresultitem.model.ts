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
  HttpActionOptions, 
  HttpFunctionOptions, 
  HttpNavigationPropertyOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { SearchResultItem } from './searchresultitem.entity';
import { SearchResultItemCollection } from './searchresultitem.collection';
//#endregion

@Model()
export class SearchResultItemModel<E extends SearchResultItem> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  UniqueId!: string;
  
  
  @ModelField()
  Type?: string;
  
  
  @ModelField()
  Permalink?: string;
  
  
  @ModelField()
  Title?: string;
  
  
  @ModelField()
  ReleaseTime!: Date;
  
  
  @ModelField()
  Url?: string;
  
  
  @ModelField()
  MetaDescription?: string;
  
  
  @ModelField()
  Image?: string;
  
  
  @ModelField()
  ImageAlt?: string;
  
  
  @ModelField()
  Description?: string;
  
  
  @ModelField()
  LeadText?: string;
  
  
  @ModelField()
  Body?: string;
  
  
  @ModelField()
  Snippet?: string;
  
  
  @ModelField()
  Location?: string;
  
  
  @ModelField()
  Language?: string;
  
  
  @ModelField()
  Themes?: string[];
  
  
  @ModelField()
  TemplateName?: string;
  
  
  @ModelField()
  ItemNameLowerCase?: string;
  
  
  @ModelField()
  SortOrder!: number;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}