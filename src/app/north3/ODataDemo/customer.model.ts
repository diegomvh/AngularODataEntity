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
import { PersonModel } from './person.model';
import { Customer } from './customer.entity';
import { CustomerCollection } from './customer.collection';
//#endregion

@Model()
export class CustomerModel<E extends Customer> extends PersonModel<E> {
  //#region ODataApi Properties
  @ModelField()
  TotalExpense!: number;
  public $TotalExpense() {
    return this.property<number>('TotalExpense');
  }
  public getTotalExpense(options?: HttpOptions) {
    return this.getValue<number>('TotalExpense', options) as Observable<number>;
  }
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}