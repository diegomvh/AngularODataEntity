import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PhysicalAddress } from './physicaladdress.entity';
import { OutlookGeoCoordinates } from './outlookgeocoordinates.entity';
//#endregion

export interface Place extends Entity {
  //#region ODataApi Properties
  displayName: string;
  geoCoordinates?: OutlookGeoCoordinates;
  phone?: string;
  address?: PhysicalAddress;
  //#endregion
}