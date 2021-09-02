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
import { CalendarEvent } from './calendarevent.entity';
import { CalendarEventCollection } from './calendarevent.collection';
//#endregion

@Model()
export class CalendarEventModel<E extends CalendarEvent> extends ODataModel<E> {
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
  Title?: string;
  public $Title() {
    return this.property<string>('Title');
  }
  public getTitle(options?: HttpOptions) {
    return this.getValue<string>('Title', options) as Observable<string>;
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
  Description?: string;
  public $Description() {
    return this.property<string>('Description');
  }
  public getDescription(options?: HttpOptions) {
    return this.getValue<string>('Description', options) as Observable<string>;
  }
  
  @ModelField()
  PlannedPublicationTime!: Date;
  public $PlannedPublicationTime() {
    return this.property<Date>('PlannedPublicationTime');
  }
  public getPlannedPublicationTime(options?: HttpOptions) {
    return this.getValue<Date>('PlannedPublicationTime', options) as Observable<Date>;
  }
  
  @ModelField()
  ReportingPeriod?: string;
  public $ReportingPeriod() {
    return this.property<string>('ReportingPeriod');
  }
  public getReportingPeriod(options?: HttpOptions) {
    return this.getValue<string>('ReportingPeriod', options) as Observable<string>;
  }
  
  @ModelField()
  Priority!: number;
  public $Priority() {
    return this.property<number>('Priority');
  }
  public getPriority(options?: HttpOptions) {
    return this.getValue<number>('Priority', options) as Observable<number>;
  }
  
  @ModelField()
  UnderEmbargo!: boolean;
  public $UnderEmbargo() {
    return this.property<boolean>('UnderEmbargo');
  }
  public getUnderEmbargo(options?: HttpOptions) {
    return this.getValue<boolean>('UnderEmbargo', options) as Observable<boolean>;
  }
  
  @ModelField()
  PublishTimeUnknown!: boolean;
  public $PublishTimeUnknown() {
    return this.property<boolean>('PublishTimeUnknown');
  }
  public getPublishTimeUnknown(options?: HttpOptions) {
    return this.getValue<boolean>('PublishTimeUnknown', options) as Observable<boolean>;
  }
  
  @ModelField()
  RegionalClassification?: string;
  public $RegionalClassification() {
    return this.property<string>('RegionalClassification');
  }
  public getRegionalClassification(options?: HttpOptions) {
    return this.getValue<string>('RegionalClassification', options) as Observable<string>;
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