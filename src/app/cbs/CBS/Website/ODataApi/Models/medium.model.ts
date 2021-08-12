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
import { MediaType } from './mediatype.enum';
import { Medium } from './medium.entity';
import { MediumCollection } from './medium.collection';
//#endregion

@Model()
export class MediumModel<E extends Medium> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  UniqueId!: string;
  
  
  @ModelField()
  Title?: string;
  
  
  @ModelField()
  MediaType!: MediaType;
  
  
  @ModelField()
  MediaTypeInt!: number;
  
  
  @ModelField()
  ReleaseTime!: Date;
  
  
  @ModelField()
  Description?: string;
  
  
  @ModelField()
  LeadText?: string;
  
  
  @ModelField()
  Url?: string;
  
  
  @ModelField()
  MetaDescription?: string;
  
  
  @ModelField()
  TaxonomyTags?: string[];
  
  
  @ModelField()
  Themes?: string[];
  
  
  @ModelField()
  Series?: string[];
  
  
  @ModelField()
  Language?: string;
  
  
  @ModelField()
  Version!: number;
  
  
  @ModelField()
  SortOrder!: number;
  
  
  @ModelField()
  ItemNameLowerCase?: string;
  
  
  @ModelField()
  Updated!: Date;
  
  
  @ModelField()
  Created!: Date;
  
  
  @ModelField()
  Permalink?: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}