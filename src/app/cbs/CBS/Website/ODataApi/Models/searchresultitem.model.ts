import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SearchResultItem } from './searchresultitem.entity';
import { SearchResultItemCollection } from './searchresultitem.collection';
//#endregion

@Model()
export class SearchResultItemModel<E extends SearchResultItem> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  UniqueId!: string;
  public $UniqueId() {
    return this.property<string>('UniqueId');
  }
  public getUniqueId(options?: ODataOptions) {
    return this.getValue<string>('UniqueId', options) as Observable<string>;
  }
  
  @ModelField()
  Type?: string;
  public $Type() {
    return this.property<string>('Type');
  }
  public getType(options?: ODataOptions) {
    return this.getValue<string>('Type', options) as Observable<string>;
  }
  
  @ModelField()
  Permalink?: string;
  public $Permalink() {
    return this.property<string>('Permalink');
  }
  public getPermalink(options?: ODataOptions) {
    return this.getValue<string>('Permalink', options) as Observable<string>;
  }
  
  @ModelField()
  Title?: string;
  public $Title() {
    return this.property<string>('Title');
  }
  public getTitle(options?: ODataOptions) {
    return this.getValue<string>('Title', options) as Observable<string>;
  }
  
  @ModelField()
  ReleaseTime!: Date;
  public $ReleaseTime() {
    return this.property<Date>('ReleaseTime');
  }
  public getReleaseTime(options?: ODataOptions) {
    return this.getValue<Date>('ReleaseTime', options) as Observable<Date>;
  }
  
  @ModelField()
  Url?: string;
  public $Url() {
    return this.property<string>('Url');
  }
  public getUrl(options?: ODataOptions) {
    return this.getValue<string>('Url', options) as Observable<string>;
  }
  
  @ModelField()
  MetaDescription?: string;
  public $MetaDescription() {
    return this.property<string>('MetaDescription');
  }
  public getMetaDescription(options?: ODataOptions) {
    return this.getValue<string>('MetaDescription', options) as Observable<string>;
  }
  
  @ModelField()
  Image?: string;
  public $Image() {
    return this.property<string>('Image');
  }
  public getImage(options?: ODataOptions) {
    return this.getValue<string>('Image', options) as Observable<string>;
  }
  
  @ModelField()
  ImageAlt?: string;
  public $ImageAlt() {
    return this.property<string>('ImageAlt');
  }
  public getImageAlt(options?: ODataOptions) {
    return this.getValue<string>('ImageAlt', options) as Observable<string>;
  }
  
  @ModelField()
  Description?: string;
  public $Description() {
    return this.property<string>('Description');
  }
  public getDescription(options?: ODataOptions) {
    return this.getValue<string>('Description', options) as Observable<string>;
  }
  
  @ModelField()
  LeadText?: string;
  public $LeadText() {
    return this.property<string>('LeadText');
  }
  public getLeadText(options?: ODataOptions) {
    return this.getValue<string>('LeadText', options) as Observable<string>;
  }
  
  @ModelField()
  Body?: string;
  public $Body() {
    return this.property<string>('Body');
  }
  public getBody(options?: ODataOptions) {
    return this.getValue<string>('Body', options) as Observable<string>;
  }
  
  @ModelField()
  Snippet?: string;
  public $Snippet() {
    return this.property<string>('Snippet');
  }
  public getSnippet(options?: ODataOptions) {
    return this.getValue<string>('Snippet', options) as Observable<string>;
  }
  
  @ModelField()
  Location?: string;
  public $Location() {
    return this.property<string>('Location');
  }
  public getLocation(options?: ODataOptions) {
    return this.getValue<string>('Location', options) as Observable<string>;
  }
  
  @ModelField()
  Language?: string;
  public $Language() {
    return this.property<string>('Language');
  }
  public getLanguage(options?: ODataOptions) {
    return this.getValue<string>('Language', options) as Observable<string>;
  }
  
  @ModelField()
  Themes?: string[];
  public $Themes() {
    return this.property<string[]>('Themes');
  }
  public getThemes(options?: ODataOptions) {
    return this.getValue<string[]>('Themes', options) as Observable<string[]>;
  }
  
  @ModelField()
  TemplateName?: string;
  public $TemplateName() {
    return this.property<string>('TemplateName');
  }
  public getTemplateName(options?: ODataOptions) {
    return this.getValue<string>('TemplateName', options) as Observable<string>;
  }
  
  @ModelField()
  ItemNameLowerCase?: string;
  public $ItemNameLowerCase() {
    return this.property<string>('ItemNameLowerCase');
  }
  public getItemNameLowerCase(options?: ODataOptions) {
    return this.getValue<string>('ItemNameLowerCase', options) as Observable<string>;
  }
  
  @ModelField()
  SortOrder!: number;
  public $SortOrder() {
    return this.property<number>('SortOrder');
  }
  public getSortOrder(options?: ODataOptions) {
    return this.getValue<number>('SortOrder', options) as Observable<number>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}