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
import { LinkList } from './linklist.complex';
import { Vacancy } from './vacancy.entity';
import { LinkListModel } from './linklist.model';
import { LinkListCollection } from './linklist.collection';
import { VacancyCollection } from './vacancy.collection';
//#endregion

@Model()
export class VacancyModel<E extends Vacancy> extends ODataModel<E> {
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
  Title?: string;
  public $Title() {
    return this.property<string>('Title');
  }
  public getTitle(options?: ODataOptions) {
    return this.getValue<string>('Title', options) as Observable<string>;
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
  VacancyNumber?: string;
  public $VacancyNumber() {
    return this.property<string>('VacancyNumber');
  }
  public getVacancyNumber(options?: ODataOptions) {
    return this.getValue<string>('VacancyNumber', options) as Observable<string>;
  }
  
  @ModelField()
  WorkingEnvironment?: string;
  public $WorkingEnvironment() {
    return this.property<string>('WorkingEnvironment');
  }
  public getWorkingEnvironment(options?: ODataOptions) {
    return this.getValue<string>('WorkingEnvironment', options) as Observable<string>;
  }
  
  @ModelField()
  TheWork?: string;
  public $TheWork() {
    return this.property<string>('TheWork');
  }
  public getTheWork(options?: ODataOptions) {
    return this.getValue<string>('TheWork', options) as Observable<string>;
  }
  
  @ModelField()
  YourProfile?: string;
  public $YourProfile() {
    return this.property<string>('YourProfile');
  }
  public getYourProfile(options?: ODataOptions) {
    return this.getValue<string>('YourProfile', options) as Observable<string>;
  }
  
  @ModelField()
  TermsOfEmployment?: string;
  public $TermsOfEmployment() {
    return this.property<string>('TermsOfEmployment');
  }
  public getTermsOfEmployment(options?: ODataOptions) {
    return this.getValue<string>('TermsOfEmployment', options) as Observable<string>;
  }
  
  @ModelField()
  MoreInformation?: string;
  public $MoreInformation() {
    return this.property<string>('MoreInformation');
  }
  public getMoreInformation(options?: ODataOptions) {
    return this.getValue<string>('MoreInformation', options) as Observable<string>;
  }
  
  @ModelField()
  PublicationDate!: Date;
  public $PublicationDate() {
    return this.property<Date>('PublicationDate');
  }
  public getPublicationDate(options?: ODataOptions) {
    return this.getValue<Date>('PublicationDate', options) as Observable<Date>;
  }
  
  @ModelField()
  ClosingDate!: Date;
  public $ClosingDate() {
    return this.property<Date>('ClosingDate');
  }
  public getClosingDate(options?: ODataOptions) {
    return this.getValue<Date>('ClosingDate', options) as Observable<Date>;
  }
  
  @ModelField()
  Engagement?: string;
  public $Engagement() {
    return this.property<string>('Engagement');
  }
  public getEngagement(options?: ODataOptions) {
    return this.getValue<string>('Engagement', options) as Observable<string>;
  }
  
  @ModelField()
  VacancyCategory?: string[];
  public $VacancyCategory() {
    return this.property<string[]>('VacancyCategory');
  }
  public getVacancyCategory(options?: ODataOptions) {
    return this.getValue<string[]>('VacancyCategory', options) as Observable<string[]>;
  }
  
  @ModelField()
  HoursPerWeek?: string;
  public $HoursPerWeek() {
    return this.property<string>('HoursPerWeek');
  }
  public getHoursPerWeek(options?: ODataOptions) {
    return this.getValue<string>('HoursPerWeek', options) as Observable<string>;
  }
  
  @ModelField()
  Salary?: string;
  public $Salary() {
    return this.property<string>('Salary');
  }
  public getSalary(options?: ODataOptions) {
    return this.getValue<string>('Salary', options) as Observable<string>;
  }
  
  @ModelField()
  LevelOfEducation?: string[];
  public $LevelOfEducation() {
    return this.property<string[]>('LevelOfEducation');
  }
  public getLevelOfEducation(options?: ODataOptions) {
    return this.getValue<string[]>('LevelOfEducation', options) as Observable<string[]>;
  }
  
  @ModelField()
  WorkLocation?: string[];
  public $WorkLocation() {
    return this.property<string[]>('WorkLocation');
  }
  public getWorkLocation(options?: ODataOptions) {
    return this.getValue<string[]>('WorkLocation', options) as Observable<string[]>;
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