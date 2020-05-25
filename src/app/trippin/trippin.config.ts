//#region ODataApi Imports
import { DefaultContainerApiConfig } from './Microsoft/OData/SampleService/Models/TripPin/defaultcontainer.api.config';
import { PersonGenderEnumConfig } from './Microsoft/OData/SampleService/Models/TripPin/persongender.enum.config';
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
import { PhotosServiceConfig } from './Microsoft/OData/SampleService/Models/TripPin/photos.service.config';
import { PeopleServiceConfig } from './Microsoft/OData/SampleService/Models/TripPin/people.service.config';
import { AirlinesServiceConfig } from './Microsoft/OData/SampleService/Models/TripPin/airlines.service.config';
import { AirportsServiceConfig } from './Microsoft/OData/SampleService/Models/TripPin/airports.service.config';
import { MeServiceConfig } from './Microsoft/OData/SampleService/Models/TripPin/me.service.config';
//#endregion

export const TripPinConfig = {
  serviceRootUrl: 'https://services.odata.org/V4/TripPinServiceRW/',
  metadataUrl: 'https://services.odata.org/V4/TripPinServiceRW/$metadata',
  creation: new Date('2020-05-25T08:58:10.3582504-03:00'),
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
    'Microsoft.OData.SampleService.Models.TripPin.Photos': PhotosServiceConfig,
    'Microsoft.OData.SampleService.Models.TripPin.People': PeopleServiceConfig,
    'Microsoft.OData.SampleService.Models.TripPin.Airlines': AirlinesServiceConfig,
    'Microsoft.OData.SampleService.Models.TripPin.Airports': AirportsServiceConfig,
    'Microsoft.OData.SampleService.Models.TripPin.Me': MeServiceConfig}
}