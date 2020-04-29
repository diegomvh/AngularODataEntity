import { ODataConfig } from 'angular-odata';

import { PersonGender } from './Microsoft/OData/SampleService/Models/TripPin/persongender.enum';
import { City } from './Microsoft/OData/SampleService/Models/TripPin/city.entity';
import { Location } from './Microsoft/OData/SampleService/Models/TripPin/location.entity';
import { EventLocation } from './Microsoft/OData/SampleService/Models/TripPin/eventlocation.entity';
import { AirportLocation } from './Microsoft/OData/SampleService/Models/TripPin/airportlocation.entity';
import { Photo } from './Microsoft/OData/SampleService/Models/TripPin/photo.entity';
import { Person } from './Microsoft/OData/SampleService/Models/TripPin/person.entity';
import { Airline } from './Microsoft/OData/SampleService/Models/TripPin/airline.entity';
import { Airport } from './Microsoft/OData/SampleService/Models/TripPin/airport.entity';
import { PlanItem } from './Microsoft/OData/SampleService/Models/TripPin/planitem.entity';
import { PublicTransportation } from './Microsoft/OData/SampleService/Models/TripPin/publictransportation.entity';
import { Flight } from './Microsoft/OData/SampleService/Models/TripPin/flight.entity';
import { Event } from './Microsoft/OData/SampleService/Models/TripPin/event.entity';
import { Trip } from './Microsoft/OData/SampleService/Models/TripPin/trip.entity';
import { CityMetaEntity } from './Microsoft/OData/SampleService/Models/TripPin/city.entity.meta';
import { LocationMetaEntity } from './Microsoft/OData/SampleService/Models/TripPin/location.entity.meta';
import { EventLocationMetaEntity } from './Microsoft/OData/SampleService/Models/TripPin/eventlocation.entity.meta';
import { AirportLocationMetaEntity } from './Microsoft/OData/SampleService/Models/TripPin/airportlocation.entity.meta';
import { PhotoMetaEntity } from './Microsoft/OData/SampleService/Models/TripPin/photo.entity.meta';
import { PersonMetaEntity } from './Microsoft/OData/SampleService/Models/TripPin/person.entity.meta';
import { AirlineMetaEntity } from './Microsoft/OData/SampleService/Models/TripPin/airline.entity.meta';
import { AirportMetaEntity } from './Microsoft/OData/SampleService/Models/TripPin/airport.entity.meta';
import { PlanItemMetaEntity } from './Microsoft/OData/SampleService/Models/TripPin/planitem.entity.meta';
import { PublicTransportationMetaEntity } from './Microsoft/OData/SampleService/Models/TripPin/publictransportation.entity.meta';
import { FlightMetaEntity } from './Microsoft/OData/SampleService/Models/TripPin/flight.entity.meta';
import { EventMetaEntity } from './Microsoft/OData/SampleService/Models/TripPin/event.entity.meta';
import { TripMetaEntity } from './Microsoft/OData/SampleService/Models/TripPin/trip.entity.meta';
import { PersonGenderMetaEnum } from './Microsoft/OData/SampleService/Models/TripPin/persongender.enum.meta';

export const TripPinConfig: ODataConfig = {
  baseUrl: 'https://services.odata.org/V4/TripPinServiceRW/',
  metadataUrl: 'https://services.odata.org/V4/TripPinServiceRW/$metadata',
  withCredentials: false,
  stringAsEnum: true,
  creation: new Date('2020-04-28T22:39:33.1350547-03:00'),
  version: '4.0',
  enums: {
    'Microsoft.OData.SampleService.Models.TripPin.PersonGender': PersonGender},
  models: {
    },
  collections: {
    },
  metas: {
    'Microsoft.OData.SampleService.Models.TripPin.PersonGender': PersonGenderMetaEnum,
    'Microsoft.OData.SampleService.Models.TripPin.City': CityMetaEntity,
    'Microsoft.OData.SampleService.Models.TripPin.Location': LocationMetaEntity,
    'Microsoft.OData.SampleService.Models.TripPin.EventLocation': EventLocationMetaEntity,
    'Microsoft.OData.SampleService.Models.TripPin.AirportLocation': AirportLocationMetaEntity,
    'Microsoft.OData.SampleService.Models.TripPin.Photo': PhotoMetaEntity,
    'Microsoft.OData.SampleService.Models.TripPin.Person': PersonMetaEntity,
    'Microsoft.OData.SampleService.Models.TripPin.Airline': AirlineMetaEntity,
    'Microsoft.OData.SampleService.Models.TripPin.Airport': AirportMetaEntity,
    'Microsoft.OData.SampleService.Models.TripPin.PlanItem': PlanItemMetaEntity,
    'Microsoft.OData.SampleService.Models.TripPin.PublicTransportation': PublicTransportationMetaEntity,
    'Microsoft.OData.SampleService.Models.TripPin.Flight': FlightMetaEntity,
    'Microsoft.OData.SampleService.Models.TripPin.Event': EventMetaEntity,
    'Microsoft.OData.SampleService.Models.TripPin.Trip': TripMetaEntity}
}