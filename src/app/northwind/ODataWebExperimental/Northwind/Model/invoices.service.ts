import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  ODataClient,
  ODataEntitySetService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  Expand, 
  Select,
  HttpOptions,
  HttpActionOptions,
  HttpFunctionOptions,
  HttpNavigationPropertyOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Invoice } from '../../../NorthwindModel/invoice.entity';
import { InvoiceModel } from '../../../NorthwindModel/invoice.model';
import { InvoiceCollection } from '../../../NorthwindModel/invoice.collection';
//#endregion

@Injectable()
export class InvoicesService extends ODataEntitySetService<Invoice> {
  constructor(protected client: ODataClient) {
    super(client, 'Invoices', 'NorthwindModel.Invoice');
  }
  //#region ODataApi Model
  invoiceModel(attrs?: Partial<Invoice>): InvoiceModel<Invoice> {
    return this.entity().asModel<InvoiceModel<Invoice>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  invoiceCollection(models?: Partial<Invoice>[]): InvoiceCollection<Invoice, InvoiceModel<Invoice>> {
    return this.entities().asCollection<InvoiceModel<Invoice>, InvoiceCollection<Invoice, InvoiceModel<Invoice>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
