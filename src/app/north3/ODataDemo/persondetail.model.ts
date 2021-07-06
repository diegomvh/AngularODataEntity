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
  HttpActionOptions, 
  HttpFunctionOptions, 
  HttpNavigationPropertyOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Address } from './address.complex';
import { PersonDetail } from './persondetail.entity';
import { AddressModel } from './address.model';
import { AddressCollection } from './address.collection';
import { PersonDetailCollection } from './persondetail.collection';
//#endregion

@Model()
export class PersonDetailModel<E extends PersonDetail> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  PersonID!: number;
  
  
  @ModelField()
  Age!: number;
  
  
  @ModelField()
  Gender!: boolean;
  
  
  @ModelField()
  Phone?: string;
  
  
  @ModelField()
  Address?: AddressModel<Address>;
  
  
  @ModelField()
  Photo!: any;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}