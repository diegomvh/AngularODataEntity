import { Container } from 'angular-odata';

//#region ODataApi Imports
import { PhotosServiceConfig } from './photos.service.config';
import { PeopleServiceConfig } from './people.service.config';
import { AirlinesServiceConfig } from './airlines.service.config';
import { AirportsServiceConfig } from './airports.service.config';
import { MeServiceConfig } from './me.service.config';
//#endregion

export const DefaultContainerContainer = {
  name: "DefaultContainerContainer",
  services: {
    'Photos': PhotosServiceConfig,
    'People': PeopleServiceConfig,
    'Airlines': AirlinesServiceConfig,
    'Airports': AirportsServiceConfig,
    'Me': MeServiceConfig}
} as Container;