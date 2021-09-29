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
import { Flash } from './flash.entity';
import { FlashCollection } from './flash.collection';
//#endregion

@Model()
export class FlashModel<E extends Flash> extends ODataModel<E> {
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
  ReleaseTime!: Date;
  public $ReleaseTime() {
    return this.property<Date>('ReleaseTime');
  }
  public getReleaseTime(options?: ODataOptions) {
    return this.getValue<Date>('ReleaseTime', options) as Observable<Date>;
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
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}