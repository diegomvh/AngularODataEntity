import { NgModule } from '@angular/core';

//#region ODataApi Imports
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
    ContainerService,
    ArticlesService,
    DefinitionsService,
    MediaService,
    EventsService,
    FlashService,
    PagesService,
    SearchService,
    VacanciesService
  ]
})
export class CBSModule { }