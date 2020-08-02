﻿import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
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
export class InvoicesService extends ODataService<Invoice> {
  constructor(protected client: ODataClient) {
    super(client, 'Invoices', 'NorthwindModel.Invoice');
  }

  invoiceModel(): InvoiceModel<Invoice> {
    return super.model() as InvoiceModel<Invoice>;
  }
  
  invoicesCollection(): InvoiceCollection<Invoice, InvoiceModel<Invoice>> {
    return super.collection() as InvoiceCollection<Invoice, InvoiceModel<Invoice>>;
  }
}
