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
import { Invoice } from '../../../NorthwindModel/invoice.entity';
//#endregion

@Injectable()
export class InvoicesService extends ODataEntityService<Invoice> {
  static path: string = 'Invoices';
  static type: string = 'ODataWebExperimental.Northwind.Model.Invoices';
  static entityType: string = 'NorthwindModel.Invoice';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
