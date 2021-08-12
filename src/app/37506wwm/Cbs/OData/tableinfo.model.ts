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
import { TableInfo } from './tableinfo.entity';
import { TableInfoCollection } from './tableinfo.collection';
//#endregion

@Model()
export class TableInfoModel<E extends TableInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ID!: number;
  
  
  @ModelField()
  Title?: string;
  
  
  @ModelField()
  ShortTitle?: string;
  
  
  @ModelField()
  Identifier?: string;
  
  
  @ModelField()
  Summary?: string;
  
  
  @ModelField()
  Modified?: any;
  
  
  @ModelField()
  ReasonDelivery?: string;
  
  
  @ModelField()
  ExplanatoryText?: string;
  
  
  @ModelField()
  Language?: string;
  
  
  @ModelField()
  Catalog?: string;
  
  
  @ModelField()
  Frequency?: string;
  
  
  @ModelField()
  Period?: string;
  
  
  @ModelField()
  ShortDescription?: string;
  
  
  @ModelField()
  Description?: string;
  
  
  @ModelField()
  DefaultPresentation?: string;
  
  
  @ModelField()
  DefaultSelection?: string;
  
  
  @ModelField()
  GraphTypes?: string;
  
  
  @ModelField()
  OutputStatus?: string;
  
  
  @ModelField()
  Source?: string;
  
  
  @ModelField()
  MetaDataModified?: any;
  
  
  @ModelField()
  SearchPriority?: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}