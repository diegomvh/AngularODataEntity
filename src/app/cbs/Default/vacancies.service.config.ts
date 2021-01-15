import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { VacanciesService } from './vacancies.service';
//#endregion

//#region ODataApi EntitySetConfig
export const VacanciesConfig = {
  name: "Vacancies",
  entityType: "CBS.Website.ODataApi.Models.Vacancy",
  service: VacanciesService,
  annotations: []
} as EntitySetConfig;
//#endregion