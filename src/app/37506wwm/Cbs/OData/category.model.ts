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
import { Category } from './category.entity';
import { CategoryCollection } from './category.collection';
//#endregion

@Model()
export class CategoryModel<E extends Category> extends ODataModel<E> {
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
  CategoryGroupID?: number;
  public $CategoryGroupID() {
    return this.property<number>('CategoryGroupID');
  }
  public getCategoryGroupID(options?: ODataOptions) {
    return this.getValue<number>('CategoryGroupID', options) as Observable<number>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}