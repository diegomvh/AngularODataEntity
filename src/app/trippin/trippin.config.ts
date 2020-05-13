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
import { DefaultContainerApiConfig } from './Microsoft/OData/SampleService/Models/TripPin/defaultcontainer.api.config';
import { CityEntityConfig } from './Microsoft/OData/SampleService/Models/TripPin/city.entity.config';
import { LocationEntityConfig } from './Microsoft/OData/SampleService/Models/TripPin/location.entity.config';
import { EventLocationEntityConfig } from './Microsoft/OData/SampleService/Models/TripPin/eventlocation.entity.config';
import { AirportLocationEntityConfig } from './Microsoft/OData/SampleService/Models/TripPin/airportlocation.entity.config';
import { PhotoEntityConfig } from './Microsoft/OData/SampleService/Models/TripPin/photo.entity.config';
import { PersonEntityConfig } from './Microsoft/OData/SampleService/Models/TripPin/person.entity.config';
import { AirlineEntityConfig } from './Microsoft/OData/SampleService/Models/TripPin/airline.entity.config';
import { AirportEntityConfig } from './Microsoft/OData/SampleService/Models/TripPin/airport.entity.config';
import { PlanItemEntityConfig } from './Microsoft/OData/SampleService/Models/TripPin/planitem.entity.config';
import { PublicTransportationEntityConfig } from './Microsoft/OData/SampleService/Models/TripPin/publictransportation.entity.config';
import { FlightEntityConfig } from './Microsoft/OData/SampleService/Models/TripPin/flight.entity.config';
import { EventEntityConfig } from './Microsoft/OData/SampleService/Models/TripPin/event.entity.config';
import { TripEntityConfig } from './Microsoft/OData/SampleService/Models/TripPin/trip.entity.config';
import { PersonGenderEnumConfig } from './Microsoft/OData/SampleService/Models/TripPin/persongender.enum.config';

export const TripPinConfig = {
  baseUrl: 'https://services.odata.org/V4/TripPinServiceRW/',
  metadataUrl: 'https://services.odata.org/V4/TripPinServiceRW/$metadata',
  withCredentials: false,
  stringAsEnum: true,
  creation: new Date('2020-05-13T10:51:01.9983373-03:00'),
  version: '4.0',
  apis: {
    'Microsoft.OData.SampleService.Models.TripPin.DefaultContainer': DefaultContainerApiConfig},
  enums: {
    'Microsoft.OData.SampleService.Models.TripPin.PersonGender': PersonGenderEnumConfig},
  entities: {
    'Microsoft.OData.SampleService.Models.TripPin.City': CityEntityConfig,
    'Microsoft.OData.SampleService.Models.TripPin.Location': LocationEntityConfig,
    'Microsoft.OData.SampleService.Models.TripPin.EventLocation': EventLocationEntityConfig,
    'Microsoft.OData.SampleService.Models.TripPin.AirportLocation': AirportLocationEntityConfig,
    'Microsoft.OData.SampleService.Models.TripPin.Photo': PhotoEntityConfig,
    'Microsoft.OData.SampleService.Models.TripPin.Person': PersonEntityConfig,
    'Microsoft.OData.SampleService.Models.TripPin.Airline': AirlineEntityConfig,
    'Microsoft.OData.SampleService.Models.TripPin.Airport': AirportEntityConfig,
    'Microsoft.OData.SampleService.Models.TripPin.PlanItem': PlanItemEntityConfig,
    'Microsoft.OData.SampleService.Models.TripPin.PublicTransportation': PublicTransportationEntityConfig,
    'Microsoft.OData.SampleService.Models.TripPin.Flight': FlightEntityConfig,
    'Microsoft.OData.SampleService.Models.TripPin.Event': EventEntityConfig,
    'Microsoft.OData.SampleService.Models.TripPin.Trip': TripEntityConfig},
  services: {
  }
}