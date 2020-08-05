import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { ArticleTypeConfig } from './articletype.enum.config';
import { MediaTypeConfig } from './mediatype.enum.config';
import { PageTypeConfig } from './pagetype.enum.config';
import { DefinitionTypeConfig } from './definitiontype.enum.config';
import { ErrataListConfig } from './erratalist.entity.config';
import { ErratumItemConfig } from './erratumitem.entity.config';
import { LinkListConfig } from './linklist.entity.config';
import { LinkConfig } from './link.entity.config';
import { ArticleConfig } from './article.entity.config';
import { DefinitionConfig } from './definition.entity.config';
import { MediumConfig } from './medium.entity.config';
import { CalendarEventConfig } from './calendarevent.entity.config';
import { FlashConfig } from './flash.entity.config';
import { PageConfig } from './page.entity.config';
import { SearchResultItemConfig } from './searchresultitem.entity.config';
import { VacancyConfig } from './vacancy.entity.config';
//#endregion

export const ModelsSchema = {
  namespace: "CBS.Website.ODataApi.Models",
  enums: [ArticleTypeConfig,
    MediaTypeConfig,
    PageTypeConfig,
    DefinitionTypeConfig],
  entities: [ErrataListConfig,
    ErratumItemConfig,
    LinkListConfig,
    LinkConfig,
    ArticleConfig,
    DefinitionConfig,
    MediumConfig,
    CalendarEventConfig,
    FlashConfig,
    PageConfig,
    SearchResultItemConfig,
    VacancyConfig],
  callables: [],
  containers: []
} as SchemaConfig;