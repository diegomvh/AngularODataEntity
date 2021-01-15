import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { PersonGenderConfig } from './persongender.enum.config';
import { CityConfig } from './city.complex.config';
import { LocationConfig } from './location.complex.config';
import { EventLocationConfig } from './eventlocation.complex.config';
import { AirportLocationConfig } from './airportlocation.complex.config';
import { PhotoConfig } from './photo.entity.config';
import { PersonConfig } from './person.entity.config';
import { AirlineConfig } from './airline.entity.config';
import { AirportConfig } from './airport.entity.config';
import { PlanItemConfig } from './planitem.entity.config';
import { PublicTransportationConfig } from './publictransportation.entity.config';
import { FlightConfig } from './flight.entity.config';
import { EventConfig } from './event.entity.config';
import { TripConfig } from './trip.entity.config';
import { DefaultContainerContainer } from './defaultcontainer.container';
//#endregion

//#region ODataApi SchemaConfig
export const TripPinSchema = {
  namespace: "Microsoft.OData.SampleService.Models.TripPin",
  enums: [PersonGenderConfig],
  entities: [CityConfig,
    LocationConfig,
    EventLocationConfig,
    AirportLocationConfig,
    PhotoConfig,
    PersonConfig,
    AirlineConfig,
    AirportConfig,
    PlanItemConfig,
    PublicTransportationConfig,
    FlightConfig,
    EventConfig,
    TripConfig],
  callables: [{
    name: 'GetFavoriteAirline',
    path: "person/Trips/PlanItems/Microsoft.OData.SampleService.Models.TripPin.Flight/Airline",
    bound: true,
    composable: true,
    parameters: { person: {type: 'Microsoft.OData.SampleService.Models.TripPin.Person', nullable: false} },
    return: "Microsoft.OData.SampleService.Models.TripPin.Airline"
  }, {
    name: 'GetInvolvedPeople',
    bound: true,
    composable: true,
    parameters: { trip: {type: 'Microsoft.OData.SampleService.Models.TripPin.Trip', nullable: false} },
    return: "Microsoft.OData.SampleService.Models.TripPin.Person"
  }, {
    name: 'GetFriendsTrips',
    path: "person/Friends/Trips",
    bound: true,
    composable: true,
    parameters: { person: {type: 'Microsoft.OData.SampleService.Models.TripPin.Person', nullable: false}, userName: {type: 'Edm.String', nullable: false} },
    return: "Microsoft.OData.SampleService.Models.TripPin.Trip"
  }, {
    name: 'GetNearestAirport',
    bound: false,
    composable: true,
    parameters: { lat: {type: 'Edm.Double', nullable: false}, lon: {type: 'Edm.Double', nullable: false} },
    return: "Microsoft.OData.SampleService.Models.TripPin.Airport"
  }, {
    name: 'ResetDataSource',
    bound: false,
    composable: false,
  }, {
    name: 'ShareTrip',
    bound: true,
    composable: false,
    parameters: { person: {type: 'Microsoft.OData.SampleService.Models.TripPin.Person', nullable: false}, userName: {type: 'Edm.String', nullable: false}, tripId: {type: 'Edm.Int32', nullable: false} },
  }],
  containers: [DefaultContainerContainer]
} as SchemaConfig;
//#endregion