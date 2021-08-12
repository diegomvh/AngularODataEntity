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
import { PageType } from './pagetype.enum';
import { LinkList } from './linklist.complex';
import { Page } from './page.entity';
import { LinkListModel } from './linklist.model';
import { LinkListCollection } from './linklist.collection';
import { PageCollection } from './page.collection';
//#endregion

@Model()
export class PageModel<E extends Page> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  UniqueId!: string;
  
  
  @ModelField()
  PageType!: PageType;
  
  
  @ModelField()
  PageTypeInt!: number;
  
  
  @ModelField()
  Title?: string;
  
  
  @ModelField()
  SubTitle?: string;
  
  
  @ModelField()
  Edition?: string;
  
  
  @ModelField()
  Url?: string;
  
  
  @ModelField()
  MetaDescription?: string;
  
  
  @ModelField()
  Image?: string;
  
  
  @ModelField()
  ImageAlt?: string;
  
  
  @ModelField()
  Category?: string[];
  
  
  @ModelField()
  Photographer?: string;
  
  
  @ModelField()
  LeadText?: string;
  
  
  @ModelField()
  Body?: string;
  
  
  @ModelField()
  Footnote?: string;
  
  
  @ModelField()
  Authors?: string;
  
  
  @ModelField()
  Location?: string;
  
  
  @ModelField()
  TaxonomyTags?: string[];
  
  
  @ModelField()
  Themes?: string[];
  
  
  @ModelField()
  Series?: string[];
  
  
  @ModelField()
  References?: LinkListModel<LinkList>;
  
  
  @ModelField()
  Downloads?: LinkListModel<LinkList>;
  
  
  @ModelField()
  Links?: LinkListModel<LinkList>;
  
  
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
  ReleaseTime!: Date;
  
  
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