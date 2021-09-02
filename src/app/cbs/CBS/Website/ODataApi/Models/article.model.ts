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
  public $UniqueId() {
    return this.property<string>('UniqueId');
  }
  public getUniqueId(options?: HttpOptions) {
    return this.getValue<string>('UniqueId', options) as Observable<string>;
  }
  
  @ModelField()
  ArticleType!: ArticleType;
  public $ArticleType() {
    return this.property<ArticleType>('ArticleType');
  }
  public getArticleType(options?: HttpOptions) {
    return this.getValue<ArticleType>('ArticleType', options) as Observable<ArticleType>;
  }
  
  @ModelField()
  ArticleTypeInt!: number;
  public $ArticleTypeInt() {
    return this.property<number>('ArticleTypeInt');
  }
  public getArticleTypeInt(options?: HttpOptions) {
    return this.getValue<number>('ArticleTypeInt', options) as Observable<number>;
  }
  
  @ModelField()
  Title?: string;
  public $Title() {
    return this.property<string>('Title');
  }
  public getTitle(options?: HttpOptions) {
    return this.getValue<string>('Title', options) as Observable<string>;
  }
  
  @ModelField()
  ReleaseTime!: Date;
  public $ReleaseTime() {
    return this.property<Date>('ReleaseTime');
  }
  public getReleaseTime(options?: HttpOptions) {
    return this.getValue<Date>('ReleaseTime', options) as Observable<Date>;
  }
  
  @ModelField()
  Url?: string;
  public $Url() {
    return this.property<string>('Url');
  }
  public getUrl(options?: HttpOptions) {
    return this.getValue<string>('Url', options) as Observable<string>;
  }
  
  @ModelField()
  MetaDescription?: string;
  public $MetaDescription() {
    return this.property<string>('MetaDescription');
  }
  public getMetaDescription(options?: HttpOptions) {
    return this.getValue<string>('MetaDescription', options) as Observable<string>;
  }
  
  @ModelField()
  Image?: string;
  public $Image() {
    return this.property<string>('Image');
  }
  public getImage(options?: HttpOptions) {
    return this.getValue<string>('Image', options) as Observable<string>;
  }
  
  @ModelField()
  ImageAlt?: string;
  public $ImageAlt() {
    return this.property<string>('ImageAlt');
  }
  public getImageAlt(options?: HttpOptions) {
    return this.getValue<string>('ImageAlt', options) as Observable<string>;
  }
  
  @ModelField()
  Category?: string;
  public $Category() {
    return this.property<string>('Category');
  }
  public getCategory(options?: HttpOptions) {
    return this.getValue<string>('Category', options) as Observable<string>;
  }
  
  @ModelField()
  Photographer?: string;
  public $Photographer() {
    return this.property<string>('Photographer');
  }
  public getPhotographer(options?: HttpOptions) {
    return this.getValue<string>('Photographer', options) as Observable<string>;
  }
  
  @ModelField()
  LeadText?: string;
  public $LeadText() {
    return this.property<string>('LeadText');
  }
  public getLeadText(options?: HttpOptions) {
    return this.getValue<string>('LeadText', options) as Observable<string>;
  }
  
  @ModelField()
  Body?: string;
  public $Body() {
    return this.property<string>('Body');
  }
  public getBody(options?: HttpOptions) {
    return this.getValue<string>('Body', options) as Observable<string>;
  }
  
  @ModelField()
  Footnote?: string;
  public $Footnote() {
    return this.property<string>('Footnote');
  }
  public getFootnote(options?: HttpOptions) {
    return this.getValue<string>('Footnote', options) as Observable<string>;
  }
  
  @ModelField()
  Errata?: ErrataListModel<ErrataList>;
  public $Errata() {
    return this.property<ErrataListModel<ErrataList>>('Errata');
  }
  public getErrata(options?: HttpOptions) {
    return this.getValue<ErrataListModel<ErrataList>>('Errata', options) as Observable<ErrataListModel<ErrataList>>;
  }
  
  @ModelField()
  Authors?: string;
  public $Authors() {
    return this.property<string>('Authors');
  }
  public getAuthors(options?: HttpOptions) {
    return this.getValue<string>('Authors', options) as Observable<string>;
  }
  
  @ModelField()
  Location?: string;
  public $Location() {
    return this.property<string>('Location');
  }
  public getLocation(options?: HttpOptions) {
    return this.getValue<string>('Location', options) as Observable<string>;
  }
  
  @ModelField()
  ISSN?: string;
  public $ISSN() {
    return this.property<string>('ISSN');
  }
  public getISSN(options?: HttpOptions) {
    return this.getValue<string>('ISSN', options) as Observable<string>;
  }
  
  @ModelField()
  ISBN?: string;
  public $ISBN() {
    return this.property<string>('ISBN');
  }
  public getISBN(options?: HttpOptions) {
    return this.getValue<string>('ISBN', options) as Observable<string>;
  }
  
  @ModelField()
  TaxonomyTags?: string[];
  public $TaxonomyTags() {
    return this.property<string[]>('TaxonomyTags');
  }
  public getTaxonomyTags(options?: HttpOptions) {
    return this.getValue<string[]>('TaxonomyTags', options) as Observable<string[]>;
  }
  
  @ModelField()
  Themes?: string[];
  public $Themes() {
    return this.property<string[]>('Themes');
  }
  public getThemes(options?: HttpOptions) {
    return this.getValue<string[]>('Themes', options) as Observable<string[]>;
  }
  
  @ModelField()
  Series?: string[];
  public $Series() {
    return this.property<string[]>('Series');
  }
  public getSeries(options?: HttpOptions) {
    return this.getValue<string[]>('Series', options) as Observable<string[]>;
  }
  
  @ModelField()
  References?: LinkListModel<LinkList>;
  public $References() {
    return this.property<LinkListModel<LinkList>>('References');
  }
  public getReferences(options?: HttpOptions) {
    return this.getValue<LinkListModel<LinkList>>('References', options) as Observable<LinkListModel<LinkList>>;
  }
  
  @ModelField()
  Downloads?: LinkListModel<LinkList>;
  public $Downloads() {
    return this.property<LinkListModel<LinkList>>('Downloads');
  }
  public getDownloads(options?: HttpOptions) {
    return this.getValue<LinkListModel<LinkList>>('Downloads', options) as Observable<LinkListModel<LinkList>>;
  }
  
  @ModelField()
  Links?: LinkListModel<LinkList>;
  public $Links() {
    return this.property<LinkListModel<LinkList>>('Links');
  }
  public getLinks(options?: HttpOptions) {
    return this.getValue<LinkListModel<LinkList>>('Links', options) as Observable<LinkListModel<LinkList>>;
  }
  
  @ModelField()
  Language?: string;
  public $Language() {
    return this.property<string>('Language');
  }
  public getLanguage(options?: HttpOptions) {
    return this.getValue<string>('Language', options) as Observable<string>;
  }
  
  @ModelField()
  Version!: number;
  public $Version() {
    return this.property<number>('Version');
  }
  public getVersion(options?: HttpOptions) {
    return this.getValue<number>('Version', options) as Observable<number>;
  }
  
  @ModelField()
  SortOrder!: number;
  public $SortOrder() {
    return this.property<number>('SortOrder');
  }
  public getSortOrder(options?: HttpOptions) {
    return this.getValue<number>('SortOrder', options) as Observable<number>;
  }
  
  @ModelField()
  ItemNameLowerCase?: string;
  public $ItemNameLowerCase() {
    return this.property<string>('ItemNameLowerCase');
  }
  public getItemNameLowerCase(options?: HttpOptions) {
    return this.getValue<string>('ItemNameLowerCase', options) as Observable<string>;
  }
  
  @ModelField()
  Updated!: Date;
  public $Updated() {
    return this.property<Date>('Updated');
  }
  public getUpdated(options?: HttpOptions) {
    return this.getValue<Date>('Updated', options) as Observable<Date>;
  }
  
  @ModelField()
  Created!: Date;
  public $Created() {
    return this.property<Date>('Created');
  }
  public getCreated(options?: HttpOptions) {
    return this.getValue<Date>('Created', options) as Observable<Date>;
  }
  
  @ModelField()
  Permalink?: string;
  public $Permalink() {
    return this.property<string>('Permalink');
  }
  public getPermalink(options?: HttpOptions) {
    return this.getValue<string>('Permalink', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}