import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ArticleType } from './articletype.enum';
import { ErrataList } from './erratalist.complex';
import { LinkList } from './linklist.complex';
import { Article } from './article.entity';
import { ErrataListModel } from './erratalist.model';
import { LinkListModel } from './linklist.model';
import { ErrataListCollection } from './erratalist.collection';
import { LinkListCollection } from './linklist.collection';
import { ArticleCollection } from './article.collection';
//#endregion

@Model()
export class ArticleModel<E extends Article> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  UniqueId!: string;
  
  
  @ModelField()
  ArticleType!: ArticleType;
  
  
  @ModelField()
  ArticleTypeInt!: number;
  
  
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
  Category?: string;
  
  
  @ModelField()
  Photographer?: string;
  
  
  @ModelField()
  LeadText?: string;
  
  
  @ModelField()
  Body?: string;
  
  
  @ModelField()
  Footnote?: string;
  
  
  @ModelField()
  Errata?: ErrataListModel<ErrataList>;
  
  
  @ModelField()
  Authors?: string;
  
  
  @ModelField()
  Location?: string;
  
  
  @ModelField()
  ISSN?: string;
  
  
  @ModelField()
  ISBN?: string;
  
  
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