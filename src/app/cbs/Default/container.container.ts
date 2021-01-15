import { EntityContainerConfig } from 'angular-odata';

//#region ODataApi Imports
import { ArticlesConfig } from './articles.service.config';
import { DefinitionsConfig } from './definitions.service.config';
import { MediaConfig } from './media.service.config';
import { EventsConfig } from './events.service.config';
import { FlashConfig } from './flash.service.config';
import { PagesConfig } from './pages.service.config';
import { SearchConfig } from './search.service.config';
import { VacanciesConfig } from './vacancies.service.config';
//#endregion

//#region ODataApi EntityContainerConfig
export const ContainerContainer = {
  name: "Container",
  annotations: [],
  entitySets: [
    ArticlesConfig,
    DefinitionsConfig,
    MediaConfig,
    EventsConfig,
    FlashConfig,
    PagesConfig,
    SearchConfig,
    VacanciesConfig
  ]
} as EntityContainerConfig;
//#endregion