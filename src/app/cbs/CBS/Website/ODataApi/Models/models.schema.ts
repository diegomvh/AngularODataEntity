import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { ArticleTypeConfig } from './articletype.enum.config';
import { MediaTypeConfig } from './mediatype.enum.config';
import { PageTypeConfig } from './pagetype.enum.config';
import { DefinitionTypeConfig } from './definitiontype.enum.config';
import { ErrataListComplexConfig } from './erratalist.complex.config';
import { ErratumItemComplexConfig } from './erratumitem.complex.config';
import { LinkListComplexConfig } from './linklist.complex.config';
import { LinkComplexConfig } from './link.complex.config';
import { ArticleEntityConfig } from './article.entity.config';
import { DefinitionEntityConfig } from './definition.entity.config';
import { MediumEntityConfig } from './medium.entity.config';
import { CalendarEventEntityConfig } from './calendarevent.entity.config';
import { FlashEntityConfig } from './flash.entity.config';
import { PageEntityConfig } from './page.entity.config';
import { SearchResultItemEntityConfig } from './searchresultitem.entity.config';
import { VacancyEntityConfig } from './vacancy.entity.config';
//#endregion

//#region ODataApi SchemaConfig
export const ModelsSchema = {
  namespace: "CBS.Website.ODataApi.Models",
  enums: [ArticleTypeConfig,
    MediaTypeConfig,
    PageTypeConfig,
    DefinitionTypeConfig],
  entities: [ErrataListComplexConfig,
    ErratumItemComplexConfig,
    LinkListComplexConfig,
    LinkComplexConfig,
    ArticleEntityConfig,
    DefinitionEntityConfig,
    MediumEntityConfig,
    CalendarEventEntityConfig,
    FlashEntityConfig,
    PageEntityConfig,
    SearchResultItemEntityConfig,
    VacancyEntityConfig],
  callables: [],
  containers: []
} as SchemaConfig;
//#endregion