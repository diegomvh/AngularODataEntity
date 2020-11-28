import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PhysicalAddress } from './physicaladdress.entity';
import { OutlookGeoCoordinates } from './outlookgeocoordinates.entity';
import { PhysicalAddressModel } from './physicaladdress.model';
import { OutlookGeoCoordinatesModel } from './outlookgeocoordinates.model';
import { EntityModel } from './entity.model';
import { PhysicalAddressCollection } from './physicaladdress.collection';
import { OutlookGeoCoordinatesCollection } from './outlookgeocoordinates.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface Place extends Entity {
  //#region ODataApi Properties
  address?: PhysicalAddress;
  displayName: string;
  geoCoordinates?: OutlookGeoCoordinates;
  phone?: string;
  //#endregion
}