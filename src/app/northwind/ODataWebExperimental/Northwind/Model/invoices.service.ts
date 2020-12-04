import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
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
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { Invoice } from '../../../NorthwindModel/invoice.entity';
import { InvoiceModel } from '../../../NorthwindModel/invoice.model';
import { InvoiceCollection } from '../../../NorthwindModel/invoice.collection';
//#endregion

@Injectable()
export class InvoicesService extends ODataEntityService<Invoice> {
  constructor(protected client: ODataClient) {
    super(client, 'Invoices', 'NorthwindModel.Invoice');
  }

  //#region ODataApi Model
  invoiceModel(attrs?: Partial<Invoice>): InvoiceModel<Invoice> {
    return this.entity().asModel(attrs || {}) as InvoiceModel<Invoice>;
  }
  //#endregion
  //#region ODataApi Collection
  invoiceCollection(models?: Partial<Invoice>[]): InvoiceCollection<Invoice, InvoiceModel<Invoice>> {
    return this.entities().asCollection(models || []) as InvoiceCollection<Invoice, InvoiceModel<Invoice>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
