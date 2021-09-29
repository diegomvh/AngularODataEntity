//#region ODataApiGen ODataImports
import {
  NgModule
} from '@angular/core';//#endregion

//#region ODataApiGen Imports
import { ContainerService } from './Default/container.service';
import { ArticlesService } from './Default/articles.service';
import { DefinitionsService } from './Default/definitions.service';
import { MediaService } from './Default/media.service';
import { EventsService } from './Default/events.service';
import { FlashService } from './Default/flash.service';
import { PagesService } from './Default/pages.service';
import { SearchService } from './Default/search.service';
import { VacanciesService } from './Default/vacancies.service';
//#endregion

@NgModule({
  providers: [
//#region ODataApiGen Providers
    ContainerService,
    ArticlesService,
    DefinitionsService,
    MediaService,
    EventsService,
    FlashService,
    PagesService,
    SearchService,
    VacanciesService//#endregion
  ]
})
export class CBSModule { }