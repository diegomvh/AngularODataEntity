import { ODataApiConfig, EDM_PARSERS, ODataMetadata, ODataVersion } from 'angular-odata';
import * as json from './metadata.json';
import { PhotoModel } from './Microsoft/OData/SampleService/Models/TripPin/photo.model';
import { PersonModel } from './Microsoft/OData/SampleService/Models/TripPin/person.model';
import { AirlineModel } from './Microsoft/OData/SampleService/Models/TripPin/airline.model';
import { AirportModel } from './Microsoft/OData/SampleService/Models/TripPin/airport.model';
import { PlanItemModel } from './Microsoft/OData/SampleService/Models/TripPin/plan-item.model';
import { PublicTransportationModel } from './Microsoft/OData/SampleService/Models/TripPin/public-transportation.model';
import { FlightModel } from './Microsoft/OData/SampleService/Models/TripPin/flight.model';
import { EventModel } from './Microsoft/OData/SampleService/Models/TripPin/event.model';
import { TripModel } from './Microsoft/OData/SampleService/Models/TripPin/trip.model';
import { CityModel } from './Microsoft/OData/SampleService/Models/TripPin/city.model';
import { LocationModel } from './Microsoft/OData/SampleService/Models/TripPin/location.model';
import { EventLocationModel } from './Microsoft/OData/SampleService/Models/TripPin/event-location.model';
import { AirportLocationModel } from './Microsoft/OData/SampleService/Models/TripPin/airport-location.model';
import { PhotoCollection } from './Microsoft/OData/SampleService/Models/TripPin/photo.collection';
import { PersonCollection } from './Microsoft/OData/SampleService/Models/TripPin/person.collection';
import { AirlineCollection } from './Microsoft/OData/SampleService/Models/TripPin/airline.collection';
import { AirportCollection } from './Microsoft/OData/SampleService/Models/TripPin/airport.collection';
import { PlanItemCollection } from './Microsoft/OData/SampleService/Models/TripPin/plan-item.collection';
import { PublicTransportationCollection } from './Microsoft/OData/SampleService/Models/TripPin/public-transportation.collection';
import { FlightCollection } from './Microsoft/OData/SampleService/Models/TripPin/flight.collection';
import { EventCollection } from './Microsoft/OData/SampleService/Models/TripPin/event.collection';
import { TripCollection } from './Microsoft/OData/SampleService/Models/TripPin/trip.collection';
import { CityCollection } from './Microsoft/OData/SampleService/Models/TripPin/city.collection';
import { LocationCollection } from './Microsoft/OData/SampleService/Models/TripPin/location.collection';
import { EventLocationCollection } from './Microsoft/OData/SampleService/Models/TripPin/event-location.collection';
import { AirportLocationCollection } from './Microsoft/OData/SampleService/Models/TripPin/airport-location.collection';

export const TripPinConfig = ODataMetadata.fromJson(json).toConfig({
  serviceRootUrl: 'https://services.odata.org/V4/TripPinServiceRW/',
  metadataUrl: 'https://services.odata.org/V4/TripPinServiceRW/$metadata',
  name: 'TripPin',
  version: '4.0' as ODataVersion,
  creation: new Date('2025-10-28T14:44:16.430Z'),
  parsers: EDM_PARSERS
}) as ODataApiConfig;
