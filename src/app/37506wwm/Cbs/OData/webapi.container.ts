//#region AngularOData Imports
import { 
  EntityContainerConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { TableInfosServiceEntitySetConfig } from './tableinfos.service.config';
import { UntypedDataSetServiceEntitySetConfig } from './untypeddataset.service.config';
import { TypedDataSetServiceEntitySetConfig } from './typeddataset.service.config';
import { DataPropertiesServiceEntitySetConfig } from './dataproperties.service.config';
import { CategoryGroupsServiceEntitySetConfig } from './categorygroups.service.config';
import { GeslachtServiceEntitySetConfig } from './geslacht.service.config';
import { LeeftijdServiceEntitySetConfig } from './leeftijd.service.config';
import { PeriodenServiceEntitySetConfig } from './perioden.service.config';
//#endregion

//#region ODataApi EntityContainerConfig
export const WebAPIContainer = {
  name: "WebAPI",
  entitySets: [
    TableInfosServiceEntitySetConfig,
    UntypedDataSetServiceEntitySetConfig,
    TypedDataSetServiceEntitySetConfig,
    DataPropertiesServiceEntitySetConfig,
    CategoryGroupsServiceEntitySetConfig,
    GeslachtServiceEntitySetConfig,
    LeeftijdServiceEntitySetConfig,
    PeriodenServiceEntitySetConfig
  ]
} as EntityContainerConfig;
//#endregion