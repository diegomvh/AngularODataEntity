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
  ODataFunctionOptions,
  ODataActionOptions,
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Photo } from './photo.entity';
import { PhotoCollection } from './photo.collection';
//#endregion

@Model()
export class PhotoModel<E extends Photo> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  Id!: number;
  public $$Id() {
    return this.property<number>('Id');
  }
  public $Id() {
    return this.getAttribute<number>('Id') as number;
  }
  
  public Id$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('Id', options) as Observable<number>;
  }
  @ModelField()
  Name?: string;
  public $$Name() {
    return this.property<string>('Name');
  }
  public $Name() {
    return this.getAttribute<string>('Name') as string;
  }
  
  public Name$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Name', options) as Observable<string>;
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}