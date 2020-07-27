import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataEntityService, 
  ODataEntityAnnotations, 
  ODataEntitiesAnnotations, 
  ODataPropertyAnnotations, 
  EntityKey,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { CustomerDemographic } from '../../../NorthwindModel/customerdemographic.entity';
import { Customer } from '../../../NorthwindModel/customer.entity';
//#endregion

@Injectable()
export class CustomerDemographicsService extends ODataEntityService<CustomerDemographic> {
  static path: string = 'CustomerDemographics';
  static type: string = 'ODataWebExperimental.Northwind.Model.CustomerDemographics';
  static entityType: string = 'NorthwindModel.CustomerDemographic';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public customers(entity: EntityKey<CustomerDemographic>): ODataNavigationPropertyResource<Customer> {
    return this.entity(entity).navigationProperty<Customer>('Customers');
  }
  //#endregion
}
