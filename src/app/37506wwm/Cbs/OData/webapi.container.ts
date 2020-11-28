import { ContainerConfig } from 'angular-odata';

//#region ODataApi Imports
import { TableInfosServiceConfig } from './tableinfos.service.config';
import { UntypedDataSetServiceConfig } from './untypeddataset.service.config';
import { TypedDataSetServiceConfig } from './typeddataset.service.config';
import { DataPropertiesServiceConfig } from './dataproperties.service.config';
import { CategoryGroupsServiceConfig } from './categorygroups.service.config';
import { GeslachtServiceConfig } from './geslacht.service.config';
import { LeeftijdServiceConfig } from './leeftijd.service.config';
import { PeriodenServiceConfig } from './perioden.service.config';
//#endregion

export const WebAPIContainer = {
  name: "WebAPI",
  annotations: [],
  services: [
    TableInfosServiceConfig,
    UntypedDataSetServiceConfig,
    TypedDataSetServiceConfig,
    DataPropertiesServiceConfig,
    CategoryGroupsServiceConfig,
    GeslachtServiceConfig,
    LeeftijdServiceConfig,
    PeriodenServiceConfig
  ]
} as ContainerConfig;