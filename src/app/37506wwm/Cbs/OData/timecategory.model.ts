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
import { TimeCategory } from './timecategory.entity';
import { TimeCategoryCollection } from './timecategory.collection';
//#endregion

@Model()
export class TimeCategoryModel<E extends TimeCategory> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  Key!: string;
  public $Key() {
    return this.property<string>('Key');
  }
  public getKey(options?: ODataOptions) {
    return this.getValue<string>('Key', options) as Observable<string>;
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
  Description?: string;
  public $Description() {
    return this.property<string>('Description');
  }
  public getDescription(options?: ODataOptions) {
    return this.getValue<string>('Description', options) as Observable<string>;
  }
  
  @ModelField()
  Status?: string;
  public $Status() {
    return this.property<string>('Status');
  }
  public getStatus(options?: ODataOptions) {
    return this.getValue<string>('Status', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}