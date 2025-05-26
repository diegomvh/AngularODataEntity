import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { Shipper } from '../../../NorthwindModel/shipper.entity';

@Injectable()
export class ShippersService extends ODataEntitySetService<Shipper> {
  constructor(client: ODataClient) {
    super(client, 'Shippers', 'NorthwindModel.Shipper');
  }
  shipperModel(entity?: Partial<Shipper>) {
    return this.model(entity);
  }
  shipperCollection(entities?: Partial<Shipper>[]) {
    return this.collection(entities);
  }
}
