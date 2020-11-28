import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { TableInfoConfig } from './tableinfo.entity.config';
import { CategoryConfig } from './category.entity.config';
import { TimeCategoryConfig } from './timecategory.entity.config';
import { GeoDetailCategoryConfig } from './geodetailcategory.entity.config';
import { UDataConfig } from './udata.entity.config';
import { TDataConfig } from './tdata.entity.config';
import { DimensionOrTopicConfig } from './dimensionortopic.entity.config';
import { DimensionConfig } from './dimension.entity.config';
import { GeoDimensionConfig } from './geodimension.entity.config';
import { GeoDetailConfig } from './geodetail.entity.config';
import { TimeDimensionConfig } from './timedimension.entity.config';
import { TopicConfig } from './topic.entity.config';
import { TopicGroupConfig } from './topicgroup.entity.config';
import { CategoryGroupConfig } from './categorygroup.entity.config';
import { WebAPIContainer } from './webapi.container';
//#endregion

export const ODataSchema = {
  namespace: "Cbs.OData",
  enums: [],
  entities: [TableInfoConfig,
    CategoryConfig,
    TimeCategoryConfig,
    GeoDetailCategoryConfig,
    UDataConfig,
    TDataConfig,
    DimensionOrTopicConfig,
    DimensionConfig,
    GeoDimensionConfig,
    GeoDetailConfig,
    TimeDimensionConfig,
    TopicConfig,
    TopicGroupConfig,
    CategoryGroupConfig],
  callables: [],
  containers: [WebAPIContainer]
} as SchemaConfig;