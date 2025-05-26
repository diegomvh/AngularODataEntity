import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { Invoice } from '../../../NorthwindModel/invoice.entity';

@Injectable()
export class InvoicesService extends ODataEntitySetService<Invoice> {
  constructor(client: ODataClient) {
    super(client, 'Invoices', 'NorthwindModel.Invoice');
  }
  invoiceModel(entity?: Partial<Invoice>) {
    return this.model(entity);
  }
  invoiceCollection(entities?: Partial<Invoice>[]) {
    return this.collection(entities);
  }
}
