import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
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
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Invoice } from '../../../NorthwindModel/invoice.entity';
import { InvoiceModel } from '../../../NorthwindModel/invoice.model';
import { InvoiceCollection } from '../../../NorthwindModel/invoice.collection';
//#endregion

@Injectable()
export class InvoicesService extends ODataEntitySetService<Invoice> {
  constructor(client: ODataClient) {
    super(client, 'Invoices', 'NorthwindModel.Invoice');
  }
  //#region ODataApiGen Model
  invoiceModel(attrs?: Partial<Invoice>): InvoiceModel<Invoice> {
    return this.entity().asModel<InvoiceModel<Invoice>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  invoiceCollection(models?: Partial<Invoice>[]): InvoiceCollection<Invoice, InvoiceModel<Invoice>> {
    return this.entities().asCollection<InvoiceModel<Invoice>, InvoiceCollection<Invoice, InvoiceModel<Invoice>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
