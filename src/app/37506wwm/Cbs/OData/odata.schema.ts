//#region ODataApiGen ODataImports
import {
  SchemaConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TableInfoEntityConfig } from './tableinfo.entity.config';
import { CategoryEntityConfig } from './category.entity.config';
import { TimeCategoryEntityConfig } from './timecategory.entity.config';
import { GeoDetailCategoryEntityConfig } from './geodetailcategory.entity.config';
import { UDataEntityConfig } from './udata.entity.config';
import { TDataEntityConfig } from './tdata.entity.config';
import { DimensionOrTopicEntityConfig } from './dimensionortopic.entity.config';
import { DimensionEntityConfig } from './dimension.entity.config';
import { GeoDimensionEntityConfig } from './geodimension.entity.config';
import { GeoDetailEntityConfig } from './geodetail.entity.config';
import { TimeDimensionEntityConfig } from './timedimension.entity.config';
import { TopicEntityConfig } from './topic.entity.config';
import { TopicGroupEntityConfig } from './topicgroup.entity.config';
import { CategoryGroupEntityConfig } from './categorygroup.entity.config';
import { WebAPIContainer } from './webapi.container';
//#endregion

//#region ODataApiGen SchemaConfig
export const ODataSchema = {
  namespace: "Cbs.OData",
  enums: [],
  entities: [TableInfoEntityConfig,
    CategoryEntityConfig,
    TimeCategoryEntityConfig,
    GeoDetailCategoryEntityConfig,
    UDataEntityConfig,
    TDataEntityConfig,
    DimensionOrTopicEntityConfig,
    DimensionEntityConfig,
    GeoDimensionEntityConfig,
    GeoDetailEntityConfig,
    TimeDimensionEntityConfig,
    TopicEntityConfig,
    TopicGroupEntityConfig,
    CategoryGroupEntityConfig],
  callables: [],
  containers: [WebAPIContainer]
} as SchemaConfig;
//#endregion