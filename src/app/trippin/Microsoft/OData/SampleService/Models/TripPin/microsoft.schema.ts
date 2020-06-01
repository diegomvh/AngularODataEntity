import { Schema } from 'angular-odata';

//#region ODataApi Imports
import { PersonGenderConfig } from './persongender.enum.config';
import { CityConfig } from './city.entity.config';
import { LocationConfig } from './location.entity.config';
import { EventLocationConfig } from './eventlocation.entity.config';
import { AirportLocationConfig } from './airportlocation.entity.config';
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

export const MicrosoftSchema = {
  namespace: "Microsoft.OData.SampleService.Models.TripPin",
  enums: [
    PersonGenderConfig
  ],
  entities: [
    CityConfig,
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
    TripConfig
  ],
  containers: [
    DefaultContainerContainer
  ]
} as Schema;