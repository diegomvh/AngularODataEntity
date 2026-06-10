import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { ShipperModel } from '../../../NorthwindModel/shipper.model';
import { ShipperCollection } from '../../../NorthwindModel/shipper.collection';
import { Shipper } from '../../../NorthwindModel/shipper.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class ShippersService extends ODataEntitySetService<Shipper> {
  constructor(client: ODataClient) {
    super(client, 'Shippers', 'NorthwindModel.Shipper');
  }
  shipperModel(entity?: Partial<Shipper>) {
    return this.model<ShipperModel<Shipper>>(entity);
  }
  shipperCollection(entities?: Partial<Shipper>[]) {
    return this.collection<ShipperModel<Shipper>, ShipperCollection<Shipper, ShipperModel<Shipper>>>(entities);
  }
// #region Custom
// #endregion Custom
}
