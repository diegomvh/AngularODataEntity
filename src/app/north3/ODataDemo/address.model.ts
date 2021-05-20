import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Address } from './address.complex';
import { AddressCollection } from './address.collection';
//#endregion

@Model()
export class AddressModel<E extends Address> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  Street?: string;
  
  
  @ModelField()
  City?: string;
  
  
  @ModelField()
  State?: string;
  
  
  @ModelField()
  ZipCode?: string;
  
  
  @ModelField()
  Country?: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}