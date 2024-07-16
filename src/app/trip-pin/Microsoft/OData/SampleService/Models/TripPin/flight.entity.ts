//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PublicTransportation } from './public-transportation.entity';
import { Airline } from './airline.entity';
import { Airport } from './airport.entity';
import { AirlineModel } from './airline.model';
import { AirportModel } from './airport.model';
import { PublicTransportationModel } from './public-transportation.model';
import { AirlineCollection } from './airline.collection';
import { AirportCollection } from './airport.collection';
import { PublicTransportationCollection } from './public-transportation.collection';
//#endregion

//#region ODataApiGen Type
export const FlightType = 'Microsoft.OData.SampleService.Models.TripPin.Flight';//#endregion
export interface Flight extends PublicTransportation {
  //#region ODataApiGen Properties
  FlightNumber: string;
  From?: Airport;
  To?: Airport;
  Airline?: Airline;
  //#endregion
}