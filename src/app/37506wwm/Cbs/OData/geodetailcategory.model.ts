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
import { GeoDetailCategory } from './geodetailcategory.entity';
import { GeoDetailCategoryCollection } from './geodetailcategory.collection';
//#endregion

@Model()
export class GeoDetailCategoryModel<E extends GeoDetailCategory> extends ODataModel<E> {
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
  Municipality?: string;
  public $Municipality() {
    return this.property<string>('Municipality');
  }
  public getMunicipality(options?: ODataOptions) {
    return this.getValue<string>('Municipality', options) as Observable<string>;
  }
  
  @ModelField()
  DetailRegionCode?: string;
  public $DetailRegionCode() {
    return this.property<string>('DetailRegionCode');
  }
  public getDetailRegionCode(options?: ODataOptions) {
    return this.getValue<string>('DetailRegionCode', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}