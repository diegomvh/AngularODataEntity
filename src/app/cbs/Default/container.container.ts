//#region AngularOData Imports
import { 
  EntityContainerConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { ArticlesServiceEntitySetConfig } from './articles.service.config';
import { DefinitionsServiceEntitySetConfig } from './definitions.service.config';
import { MediaServiceEntitySetConfig } from './media.service.config';
import { EventsServiceEntitySetConfig } from './events.service.config';
import { FlashServiceEntitySetConfig } from './flash.service.config';
import { PagesServiceEntitySetConfig } from './pages.service.config';
import { SearchServiceEntitySetConfig } from './search.service.config';
import { VacanciesServiceEntitySetConfig } from './vacancies.service.config';
//#endregion

//#region ODataApi EntityContainerConfig
export const ContainerContainer = {
  name: "Container",
  entitySets: [
    ArticlesServiceEntitySetConfig,
    DefinitionsServiceEntitySetConfig,
    MediaServiceEntitySetConfig,
    EventsServiceEntitySetConfig,
    FlashServiceEntitySetConfig,
    PagesServiceEntitySetConfig,
    SearchServiceEntitySetConfig,
    VacanciesServiceEntitySetConfig
  ]
} as EntityContainerConfig;
//#endregion