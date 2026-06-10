import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { InvoiceModel } from '../../../NorthwindModel/invoice.model';
import { InvoiceCollection } from '../../../NorthwindModel/invoice.collection';
import { Invoice } from '../../../NorthwindModel/invoice.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class InvoicesService extends ODataEntitySetService<Invoice> {
  constructor(client: ODataClient) {
    super(client, 'Invoices', 'NorthwindModel.Invoice');
  }
  invoiceModel(entity?: Partial<Invoice>) {
    return this.model<InvoiceModel<Invoice>>(entity);
  }
  invoiceCollection(entities?: Partial<Invoice>[]) {
    return this.collection<InvoiceModel<Invoice>, InvoiceCollection<Invoice, InvoiceModel<Invoice>>>(entities);
  }
// #region Custom
// #endregion Custom
}
