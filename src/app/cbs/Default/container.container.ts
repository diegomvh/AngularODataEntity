import { EntityContainerConfig } from 'angular-odata';

//#region ODataApi Imports
import { ArticlesServiceConfig } from './articles.service.config';
import { DefinitionsServiceConfig } from './definitions.service.config';
import { MediaServiceConfig } from './media.service.config';
import { EventsServiceConfig } from './events.service.config';
import { FlashServiceConfig } from './flash.service.config';
import { PagesServiceConfig } from './pages.service.config';
import { SearchServiceConfig } from './search.service.config';
import { VacanciesServiceConfig } from './vacancies.service.config';
//#endregion

export const ContainerContainer = {
  name: "Container",
  annotations: [],
  services: [
    ArticlesServiceConfig,
    DefinitionsServiceConfig,
    MediaServiceConfig,
    EventsServiceConfig,
    FlashServiceConfig,
    PagesServiceConfig,
    SearchServiceConfig,
    VacanciesServiceConfig
  ]
} as EntityContainerConfig;