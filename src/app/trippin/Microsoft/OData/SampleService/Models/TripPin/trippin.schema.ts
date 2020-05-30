import { Schema } from 'angular-odata';

//#region ODataApi Imports
import { PersonGenderEnumConfig } from './persongender.enum.config';
import { CityEntityConfig } from './city.entity.config';
import { LocationEntityConfig } from './location.entity.config';
import { EventLocationEntityConfig } from './eventlocation.entity.config';
import { AirportLocationEntityConfig } from './airportlocation.entity.config';
import { PhotoEntityConfig } from './photo.entity.config';
import { PersonEntityConfig } from './person.entity.config';
import { AirlineEntityConfig } from './airline.entity.config';
import { AirportEntityConfig } from './airport.entity.config';
import { PlanItemEntityConfig } from './planitem.entity.config';
import { PublicTransportationEntityConfig } from './publictransportation.entity.config';
import { FlightEntityConfig } from './flight.entity.config';
import { EventEntityConfig } from './event.entity.config';
import { TripEntityConfig } from './trip.entity.config';
import { DefaultContainerContainer } from './defaultcontainer.container';
//#endregion

export const TripPinSchema = {
  namespace: "Microsoft.OData.SampleService.Models.TripPin",
  enums: {
    'PersonGender': PersonGenderEnumConfig},
  entities: {
    'City': CityEntityConfig,
    'Location': LocationEntityConfig,
    'EventLocation': EventLocationEntityConfig,
    'AirportLocation': AirportLocationEntityConfig,
    'Photo': PhotoEntityConfig,
    'Person': PersonEntityConfig,
    'Airline': AirlineEntityConfig,
    'Airport': AirportEntityConfig,
    'PlanItem': PlanItemEntityConfig,
    'PublicTransportation': PublicTransportationEntityConfig,
    'Flight': FlightEntityConfig,
    'Event': EventEntityConfig,
    'Trip': TripEntityConfig},
  containers: {
    'DefaultContainerContainer': DefaultContainerContainer}
} as Schema;