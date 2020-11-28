import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { SourceUrlsConfig } from './sourceurls.entity.config';
import { HttpUrlsConfig } from './httpurls.entity.config';
import { SerconexPenalUrlsConfig } from './serconexpenalurls.entity.config';
import { SiuUrlsConfig } from './siuurls.entity.config';
import { SkuaUrlsConfig } from './skuaurls.entity.config';
//#endregion

export const BackendSchema = {
  namespace: "SIU.Api.Infrastructure.Storage.Backend",
  enums: [],
  entities: [SourceUrlsConfig,
    HttpUrlsConfig,
    SerconexPenalUrlsConfig,
    SiuUrlsConfig,
    SkuaUrlsConfig],
  callables: [],
  containers: []
} as SchemaConfig;