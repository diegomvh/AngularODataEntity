//#region AngularOData Imports
import { 
  SchemaConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { PersonGenderConfig } from './persongender.enum.config';
import { CityComplexConfig } from './city.complex.config';
import { LocationComplexConfig } from './location.complex.config';
import { EventLocationComplexConfig } from './eventlocation.complex.config';
import { AirportLocationComplexConfig } from './airportlocation.complex.config';
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

//#region ODataApi SchemaConfig
export const TripPinSchema = {
  namespace: "Microsoft.OData.SampleService.Models.TripPin",
  enums: [PersonGenderConfig],
  entities: [CityComplexConfig,
    LocationComplexConfig,
    EventLocationComplexConfig,
    AirportLocationComplexConfig,
    PhotoEntityConfig,
    PersonEntityConfig,
    AirlineEntityConfig,
    AirportEntityConfig,
    PlanItemEntityConfig,
    PublicTransportationEntityConfig,
    FlightEntityConfig,
    EventEntityConfig,
    TripEntityConfig],
  callables: [{
    name: 'GetFavoriteAirline',
    entitySetPath: "person/Trips/PlanItems/Microsoft.OData.SampleService.Models.TripPin.Flight/Airline",
    bound: true,
    composable: true,
    parameters: { person: {type: 'Microsoft.OData.SampleService.Models.TripPin.Person', nullable: false} },
    return: { type: "Microsoft.OData.SampleService.Models.TripPin.Airline", collection: false }
  }, {
    name: 'GetInvolvedPeople',
    bound: true,
    composable: true,
    parameters: { trip: {type: 'Microsoft.OData.SampleService.Models.TripPin.Trip', nullable: false} },
    return: { type: "Microsoft.OData.SampleService.Models.TripPin.Person", collection: true }
  }, {
    name: 'GetFriendsTrips',
    entitySetPath: "person/Friends/Trips",
    bound: true,
    composable: true,
    parameters: { person: {type: 'Microsoft.OData.SampleService.Models.TripPin.Person', nullable: false}, userName: {type: 'Edm.String', nullable: false} },
    return: { type: "Microsoft.OData.SampleService.Models.TripPin.Trip", collection: true }
  }, {
    name: 'GetNearestAirport',
    bound: false,
    composable: true,
    parameters: { lat: {type: 'Edm.Double', nullable: false}, lon: {type: 'Edm.Double', nullable: false} },
    return: { type: "Microsoft.OData.SampleService.Models.TripPin.Airport", collection: false }
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