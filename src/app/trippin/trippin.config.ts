import { ODataConfig } from 'angular-odata';

import { PersonGender } from './Microsoft/OData/SampleService/Models/TripPin/persongender.enum';
import { City, CitySchema } from './Microsoft/OData/SampleService/Models/TripPin/city.interface';
import { Location, LocationSchema } from './Microsoft/OData/SampleService/Models/TripPin/location.interface';
import { EventLocation, EventLocationSchema } from './Microsoft/OData/SampleService/Models/TripPin/eventlocation.interface';
import { AirportLocation, AirportLocationSchema } from './Microsoft/OData/SampleService/Models/TripPin/airportlocation.interface';
import { Photo, PhotoSchema } from './Microsoft/OData/SampleService/Models/TripPin/photo.interface';
import { Person, PersonSchema } from './Microsoft/OData/SampleService/Models/TripPin/person.interface';
import { Airline, AirlineSchema } from './Microsoft/OData/SampleService/Models/TripPin/airline.interface';
import { Airport, AirportSchema } from './Microsoft/OData/SampleService/Models/TripPin/airport.interface';
import { PlanItem, PlanItemSchema } from './Microsoft/OData/SampleService/Models/TripPin/planitem.interface';
import { PublicTransportation, PublicTransportationSchema } from './Microsoft/OData/SampleService/Models/TripPin/publictransportation.interface';
import { Flight, FlightSchema } from './Microsoft/OData/SampleService/Models/TripPin/flight.interface';
import { Event, EventSchema } from './Microsoft/OData/SampleService/Models/TripPin/event.interface';
import { Trip, TripSchema } from './Microsoft/OData/SampleService/Models/TripPin/trip.interface';

export const TripPinConfig: ODataConfig = {
  baseUrl: 'https://services.odata.org/V4/TripPinServiceRW/',
  metadataUrl: 'https://services.odata.org/V4/TripPinServiceRW/$metadata',
  withCredentials: false,
  stringAsEnum: true,
  creation: new Date('2019-11-24T17:55:47.9762741-03:00'),
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