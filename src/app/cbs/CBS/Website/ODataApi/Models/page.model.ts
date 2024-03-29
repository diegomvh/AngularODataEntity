﻿import { HttpHeaders, HttpParams } from '@angular/common/http';
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
import { PageType } from './pagetype.enum';
import { LinkList } from './linklist.complex';
import { Page } from './page.entity';
import { LinkListModel } from './linklist.model';
import { LinkListCollection } from './linklist.collection';
import { PageCollection } from './page.collection';
//#endregion

@Model()
export class PageModel<E extends Page> extends ODataModel<E> {
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
  PageType!: PageType;
  public $PageType() {
    return this.property<PageType>('PageType');
  }
  public getPageType(options?: ODataOptions) {
    return this.getValue<PageType>('PageType', options) as Observable<PageType>;
  }
  
  @ModelField()
  PageTypeInt!: number;
  public $PageTypeInt() {
    return this.property<number>('PageTypeInt');
  }
  public getPageTypeInt(options?: ODataOptions) {
    return this.getValue<number>('PageTypeInt', options) as Observable<number>;
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
  SubTitle?: string;
  public $SubTitle() {
    return this.property<string>('SubTitle');
  }
  public getSubTitle(options?: ODataOptions) {
    return this.getValue<string>('SubTitle', options) as Observable<string>;
  }
  
  @ModelField()
  Edition?: string;
  public $Edition() {
    return this.property<string>('Edition');
  }
  public getEdition(options?: ODataOptions) {
    return this.getValue<string>('Edition', options) as Observable<string>;
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
  Category?: string[];
  public $Category() {
    return this.property<string[]>('Category');
  }
  public getCategory(options?: ODataOptions) {
    return this.getValue<string[]>('Category', options) as Observable<string[]>;
  }
  
  @ModelField()
  Photographer?: string;
  public $Photographer() {
    return this.property<string>('Photographer');
  }
  public getPhotographer(options?: ODataOptions) {
    return this.getValue<string>('Photographer', options) as Observable<string>;
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
  Footnote?: string;
  public $Footnote() {
    return this.property<string>('Footnote');
  }
  public getFootnote(options?: ODataOptions) {
    return this.getValue<string>('Footnote', options) as Observable<string>;
  }
  
  @ModelField()
  Authors?: string;
  public $Authors() {
    return this.property<string>('Authors');
  }
  public getAuthors(options?: ODataOptions) {
    return this.getValue<string>('Authors', options) as Observable<string>;
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
  TaxonomyTags?: string[];
  public $TaxonomyTags() {
    return this.property<string[]>('TaxonomyTags');
  }
  public getTaxonomyTags(options?: ODataOptions) {
    return this.getValue<string[]>('TaxonomyTags', options) as Observable<string[]>;
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
  Series?: string[];
  public $Series() {
    return this.property<string[]>('Series');
  }
  public getSeries(options?: ODataOptions) {
    return this.getValue<string[]>('Series', options) as Observable<string[]>;
  }
  
  @ModelField()
  References?: LinkListModel<LinkList>;
  public $References() {
    return this.property<LinkListModel<LinkList>>('References');
  }
  public getReferences(options?: ODataOptions) {
    return this.getValue<LinkListModel<LinkList>>('References', options) as Observable<LinkListModel<LinkList>>;
  }
  
  @ModelField()
  Downloads?: LinkListModel<LinkList>;
  public $Downloads() {
    return this.property<LinkListModel<LinkList>>('Downloads');
  }
  public getDownloads(options?: ODataOptions) {
    return this.getValue<LinkListModel<LinkList>>('Downloads', options) as Observable<LinkListModel<LinkList>>;
  }
  
  @ModelField()
  Links?: LinkListModel<LinkList>;
  public $Links() {
    return this.property<LinkListModel<LinkList>>('Links');
  }
  public getLinks(options?: ODataOptions) {
    return this.getValue<LinkListModel<LinkList>>('Links', options) as Observable<LinkListModel<LinkList>>;
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
  Version!: number;
  public $Version() {
    return this.property<number>('Version');
  }
  public getVersion(options?: ODataOptions) {
    return this.getValue<number>('Version', options) as Observable<number>;
  }
  
  @ModelField()
  SortOrder!: number;
  public $SortOrder() {
    return this.property<number>('SortOrder');
  }
  public getSortOrder(options?: ODataOptions) {
    return this.getValue<number>('SortOrder', options) as Observable<number>;
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
  Updated!: Date;
  public $Updated() {
    return this.property<Date>('Updated');
  }
  public getUpdated(options?: ODataOptions) {
    return this.getValue<Date>('Updated', options) as Observable<Date>;
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
  Created!: Date;
  public $Created() {
    return this.property<Date>('Created');
  }
  public getCreated(options?: ODataOptions) {
    return this.getValue<Date>('Created', options) as Observable<Date>;
  }
  
  @ModelField()
  Permalink?: string;
  public $Permalink() {
    return this.property<string>('Permalink');
  }
  public getPermalink(options?: ODataOptions) {
    return this.getValue<string>('Permalink', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}