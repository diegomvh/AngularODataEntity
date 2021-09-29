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
import { DefinitionType } from './definitiontype.enum';
import { LinkList } from './linklist.complex';
import { Definition } from './definition.entity';
import { LinkListModel } from './linklist.model';
import { LinkListCollection } from './linklist.collection';
import { DefinitionCollection } from './definition.collection';
//#endregion

@Model()
export class DefinitionModel<E extends Definition> extends ODataModel<E> {
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
  DefinitionType!: DefinitionType;
  public $DefinitionType() {
    return this.property<DefinitionType>('DefinitionType');
  }
  public getDefinitionType(options?: ODataOptions) {
    return this.getValue<DefinitionType>('DefinitionType', options) as Observable<DefinitionType>;
  }
  
  @ModelField()
  DefinitionTypeInt!: number;
  public $DefinitionTypeInt() {
    return this.property<number>('DefinitionTypeInt');
  }
  public getDefinitionTypeInt(options?: ODataOptions) {
    return this.getValue<number>('DefinitionTypeInt', options) as Observable<number>;
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
  
  @ModelField()
  References?: LinkListModel<LinkList>;
  public $References() {
    return this.property<LinkListModel<LinkList>>('References');
  }
  public getReferences(options?: ODataOptions) {
    return this.getValue<LinkListModel<LinkList>>('References', options) as Observable<LinkListModel<LinkList>>;
  }
  
  @ModelField()
  Links?: LinkListModel<LinkList>;
  public $Links() {
    return this.property<LinkListModel<LinkList>>('Links');
  }
  public getLinks(options?: ODataOptions) {
    return this.getValue<LinkListModel<LinkList>>('Links', options) as Observable<LinkListModel<LinkList>>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}