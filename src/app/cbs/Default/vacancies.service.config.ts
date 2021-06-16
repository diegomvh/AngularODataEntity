//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { VacanciesService } from './vacancies.service';
//#endregion

//#region ODataApi EntitySetConfig
export const VacanciesServiceEntitySetConfig = {
  name: "Vacancies",
  entityType: "CBS.Website.ODataApi.Models.Vacancy",
  service: VacanciesService
} as EntitySetConfig;
//#endregion