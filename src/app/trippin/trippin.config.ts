import { ODataConfig } from 'angular-odata';

import { PersonGender } from './Microsoft/OData/SampleService/Models/TripPin/persongender.enum';
import { City, CitySchema } from './Microsoft/OData/SampleService/Models/TripPin/city.entity';
import { Location, LocationSchema } from './Microsoft/OData/SampleService/Models/TripPin/location.entity';
import { EventLocation, EventLocationSchema } from './Microsoft/OData/SampleService/Models/TripPin/eventlocation.entity';
import { AirportLocation, AirportLocationSchema } from './Microsoft/OData/SampleService/Models/TripPin/airportlocation.entity';
import { Photo, PhotoSchema } from './Microsoft/OData/SampleService/Models/TripPin/photo.entity';
import { Person, PersonSchema } from './Microsoft/OData/SampleService/Models/TripPin/person.entity';
import { Airline, AirlineSchema } from './Microsoft/OData/SampleService/Models/TripPin/airline.entity';
import { Airport, AirportSchema } from './Microsoft/OData/SampleService/Models/TripPin/airport.entity';
import { PlanItem, PlanItemSchema } from './Microsoft/OData/SampleService/Models/TripPin/planitem.entity';
import { PublicTransportation, PublicTransportationSchema } from './Microsoft/OData/SampleService/Models/TripPin/publictransportation.entity';
import { Flight, FlightSchema } from './Microsoft/OData/SampleService/Models/TripPin/flight.entity';
import { Event, EventSchema } from './Microsoft/OData/SampleService/Models/TripPin/event.entity';
import { Trip, TripSchema } from './Microsoft/OData/SampleService/Models/TripPin/trip.entity';

export const TripPinConfig: ODataConfig = {
  baseUrl: 'https://services.odata.org/V4/TripPinServiceRW/',
  metadataUrl: 'https://services.odata.org/V4/TripPinServiceRW/$metadata',
  withCredentials: false,
  creation: new Date('2019-10-20T07:42:58.6249970-03:00'),
  version: '4.0',
  enums: {
    'Microsoft.OData.SampleService.Models.TripPin.PersonGender': PersonGender},
  models: {
    },
  collections: {
    },
  schemas: {
    'Microsoft.OData.SampleService.Models.TripPin.City': CitySchema,
    'Microsoft.OData.SampleService.Models.TripPin.Location': LocationSchema,
    'Microsoft.OData.SampleService.Models.TripPin.EventLocation': EventLocationSchema,
    'Microsoft.OData.SampleService.Models.TripPin.AirportLocation': AirportLocationSchema,
    'Microsoft.OData.SampleService.Models.TripPin.Photo': PhotoSchema,
    'Microsoft.OData.SampleService.Models.TripPin.Person': PersonSchema,
    'Microsoft.OData.SampleService.Models.TripPin.Airline': AirlineSchema,
    'Microsoft.OData.SampleService.Models.TripPin.Airport': AirportSchema,
    'Microsoft.OData.SampleService.Models.TripPin.PlanItem': PlanItemSchema,
    'Microsoft.OData.SampleService.Models.TripPin.PublicTransportation': PublicTransportationSchema,
    'Microsoft.OData.SampleService.Models.TripPin.Flight': FlightSchema,
    'Microsoft.OData.SampleService.Models.TripPin.Event': EventSchema,
    'Microsoft.OData.SampleService.Models.TripPin.Trip': TripSchema}
}