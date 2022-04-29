//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { VacanciesService } from './vacancies.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const VacanciesServiceEntitySetConfig = {
  name: 'Vacancies',
  entityType: 'CBS.Website.ODataApi.Models.Vacancy',
  service: VacanciesService
} as EntitySetConfig;
//#endregion