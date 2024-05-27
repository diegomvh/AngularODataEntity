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
import { PersonModel } from './person.model';
import { Customer } from './customer.entity';
import { CustomerCollection } from './customer.collection';
//#endregion

@Model()
export class CustomerModel<E extends Customer> extends PersonModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  TotalExpense!: number;
  public $$TotalExpense() {
    return this.property<number>('TotalExpense');
  }
  public $TotalExpense() {
    return this.getAttribute<number>('TotalExpense') as number;
  }
  
  public TotalExpense$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('TotalExpense', options) as Observable<number>;
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}