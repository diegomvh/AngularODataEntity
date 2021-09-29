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
import { TableInfo } from './tableinfo.entity';
import { TableInfoCollection } from './tableinfo.collection';
//#endregion

@Model()
export class TableInfoModel<E extends TableInfo> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  ID!: number;
  public $ID() {
    return this.property<number>('ID');
  }
  public getID(options?: ODataOptions) {
    return this.getValue<number>('ID', options) as Observable<number>;
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
  ShortTitle?: string;
  public $ShortTitle() {
    return this.property<string>('ShortTitle');
  }
  public getShortTitle(options?: ODataOptions) {
    return this.getValue<string>('ShortTitle', options) as Observable<string>;
  }
  
  @ModelField()
  Identifier?: string;
  public $Identifier() {
    return this.property<string>('Identifier');
  }
  public getIdentifier(options?: ODataOptions) {
    return this.getValue<string>('Identifier', options) as Observable<string>;
  }
  
  @ModelField()
  Summary?: string;
  public $Summary() {
    return this.property<string>('Summary');
  }
  public getSummary(options?: ODataOptions) {
    return this.getValue<string>('Summary', options) as Observable<string>;
  }
  
  @ModelField()
  Modified?: any;
  public $Modified() {
    return this.property<any>('Modified');
  }
  public getModified(options?: ODataOptions) {
    return this.getValue<any>('Modified', options) as Observable<any>;
  }
  
  @ModelField()
  ReasonDelivery?: string;
  public $ReasonDelivery() {
    return this.property<string>('ReasonDelivery');
  }
  public getReasonDelivery(options?: ODataOptions) {
    return this.getValue<string>('ReasonDelivery', options) as Observable<string>;
  }
  
  @ModelField()
  ExplanatoryText?: string;
  public $ExplanatoryText() {
    return this.property<string>('ExplanatoryText');
  }
  public getExplanatoryText(options?: ODataOptions) {
    return this.getValue<string>('ExplanatoryText', options) as Observable<string>;
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
  Catalog?: string;
  public $Catalog() {
    return this.property<string>('Catalog');
  }
  public getCatalog(options?: ODataOptions) {
    return this.getValue<string>('Catalog', options) as Observable<string>;
  }
  
  @ModelField()
  Frequency?: string;
  public $Frequency() {
    return this.property<string>('Frequency');
  }
  public getFrequency(options?: ODataOptions) {
    return this.getValue<string>('Frequency', options) as Observable<string>;
  }
  
  @ModelField()
  Period?: string;
  public $Period() {
    return this.property<string>('Period');
  }
  public getPeriod(options?: ODataOptions) {
    return this.getValue<string>('Period', options) as Observable<string>;
  }
  
  @ModelField()
  ShortDescription?: string;
  public $ShortDescription() {
    return this.property<string>('ShortDescription');
  }
  public getShortDescription(options?: ODataOptions) {
    return this.getValue<string>('ShortDescription', options) as Observable<string>;
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
  DefaultPresentation?: string;
  public $DefaultPresentation() {
    return this.property<string>('DefaultPresentation');
  }
  public getDefaultPresentation(options?: ODataOptions) {
    return this.getValue<string>('DefaultPresentation', options) as Observable<string>;
  }
  
  @ModelField()
  DefaultSelection?: string;
  public $DefaultSelection() {
    return this.property<string>('DefaultSelection');
  }
  public getDefaultSelection(options?: ODataOptions) {
    return this.getValue<string>('DefaultSelection', options) as Observable<string>;
  }
  
  @ModelField()
  GraphTypes?: string;
  public $GraphTypes() {
    return this.property<string>('GraphTypes');
  }
  public getGraphTypes(options?: ODataOptions) {
    return this.getValue<string>('GraphTypes', options) as Observable<string>;
  }
  
  @ModelField()
  OutputStatus?: string;
  public $OutputStatus() {
    return this.property<string>('OutputStatus');
  }
  public getOutputStatus(options?: ODataOptions) {
    return this.getValue<string>('OutputStatus', options) as Observable<string>;
  }
  
  @ModelField()
  Source?: string;
  public $Source() {
    return this.property<string>('Source');
  }
  public getSource(options?: ODataOptions) {
    return this.getValue<string>('Source', options) as Observable<string>;
  }
  
  @ModelField()
  MetaDataModified?: any;
  public $MetaDataModified() {
    return this.property<any>('MetaDataModified');
  }
  public getMetaDataModified(options?: ODataOptions) {
    return this.getValue<any>('MetaDataModified', options) as Observable<any>;
  }
  
  @ModelField()
  SearchPriority?: string;
  public $SearchPriority() {
    return this.property<string>('SearchPriority');
  }
  public getSearchPriority(options?: ODataOptions) {
    return this.getValue<string>('SearchPriority', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}