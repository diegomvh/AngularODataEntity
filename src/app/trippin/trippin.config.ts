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
import { CityMeta } from './Microsoft/OData/SampleService/Models/TripPin/city.meta';
import { LocationMeta } from './Microsoft/OData/SampleService/Models/TripPin/location.meta';
import { EventLocationMeta } from './Microsoft/OData/SampleService/Models/TripPin/eventlocation.meta';
import { AirportLocationMeta } from './Microsoft/OData/SampleService/Models/TripPin/airportlocation.meta';
import { PhotoMeta } from './Microsoft/OData/SampleService/Models/TripPin/photo.meta';
import { PersonMeta } from './Microsoft/OData/SampleService/Models/TripPin/person.meta';
import { AirlineMeta } from './Microsoft/OData/SampleService/Models/TripPin/airline.meta';
import { AirportMeta } from './Microsoft/OData/SampleService/Models/TripPin/airport.meta';
import { PlanItemMeta } from './Microsoft/OData/SampleService/Models/TripPin/planitem.meta';
import { PublicTransportationMeta } from './Microsoft/OData/SampleService/Models/TripPin/publictransportation.meta';
import { FlightMeta } from './Microsoft/OData/SampleService/Models/TripPin/flight.meta';
import { EventMeta } from './Microsoft/OData/SampleService/Models/TripPin/event.meta';
import { TripMeta } from './Microsoft/OData/SampleService/Models/TripPin/trip.meta';

export const TripPinConfig: ODataConfig = {
  baseUrl: 'https://services.odata.org/V4/TripPinServiceRW/',
  metadataUrl: 'https://services.odata.org/V4/TripPinServiceRW/$metadata',
  withCredentials: false,
  stringAsEnum: true,
  creation: new Date('2020-03-31T11:21:54.4822645-03:00'),
  version: '4.0',
  enums: {
    'Microsoft.OData.SampleService.Models.TripPin.PersonGender': PersonGender},
  models: {
    },
  collections: {
    },
  metas: {
    'Microsoft.OData.SampleService.Models.TripPin.City': CityMeta,
    'Microsoft.OData.SampleService.Models.TripPin.Location': LocationMeta,
    'Microsoft.OData.SampleService.Models.TripPin.EventLocation': EventLocationMeta,
    'Microsoft.OData.SampleService.Models.TripPin.AirportLocation': AirportLocationMeta,
    'Microsoft.OData.SampleService.Models.TripPin.Photo': PhotoMeta,
    'Microsoft.OData.SampleService.Models.TripPin.Person': PersonMeta,
    'Microsoft.OData.SampleService.Models.TripPin.Airline': AirlineMeta,
    'Microsoft.OData.SampleService.Models.TripPin.Airport': AirportMeta,
    'Microsoft.OData.SampleService.Models.TripPin.PlanItem': PlanItemMeta,
    'Microsoft.OData.SampleService.Models.TripPin.PublicTransportation': PublicTransportationMeta,
    'Microsoft.OData.SampleService.Models.TripPin.Flight': FlightMeta,
    'Microsoft.OData.SampleService.Models.TripPin.Event': EventMeta,
    'Microsoft.OData.SampleService.Models.TripPin.Trip': TripMeta}
}