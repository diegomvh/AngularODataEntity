//#region AngularOData Imports
import { 
  EntityContainerConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { PhotosServiceEntitySetConfig } from './photos.service.config';
import { PeopleServiceEntitySetConfig } from './people.service.config';
import { AirlinesServiceEntitySetConfig } from './airlines.service.config';
import { AirportsServiceEntitySetConfig } from './airports.service.config';
import { MeServiceEntitySetConfig } from './me.service.config';
//#endregion

//#region ODataApi EntityContainerConfig
export const DefaultContainerContainer = {
  name: "DefaultContainer",
  annotations: [
  {
    "term": "Org.OData.Core.V1.Description",
    "string": "TripPin service is a sample service for OData V4."
  },
  {
    "term": "Org.OData.Core.V1.DereferenceableIDs",
    "bool": true
  },
  {
    "term": "Org.OData.Core.V1.ConventionalIDs",
    "bool": true
  },
  {
    "term": "Org.OData.Capabilities.V1.ConformanceLevel",
    "values": [
      "Org.OData.Capabilities.V1.ConformanceLevelType/Advanced"
    ]
  },
  {
    "term": "Org.OData.Capabilities.V1.SupportedFormats",
    "values": [
      "application/json;odata.metadata=full;IEEE754Compatible=false;odata.streaming=true",
      "application/json;odata.metadata=minimal;IEEE754Compatible=false;odata.streaming=true",
      "application/json;odata.metadata=none;IEEE754Compatible=false;odata.streaming=true"
    ]
  },
  {
    "term": "Org.OData.Capabilities.V1.AsynchronousRequestsSupported",
    "bool": true
  },
  {
    "term": "Org.OData.Capabilities.V1.BatchContinueOnErrorSupported",
    "bool": false
  },
  {
    "term": "Org.OData.Capabilities.V1.FilterFunctions",
    "values": [
      "contains",
      "endswith",
      "startswith",
      "length",
      "indexof",
      "substring",
      "tolower",
      "toupper",
      "trim",
      "concat",
      "year",
      "month",
      "day",
      "hour",
      "minute",
      "second",
      "round",
      "floor",
      "ceiling",
      "cast",
      "isof"
    ]
  }
],
  entitySets: [
    PhotosServiceEntitySetConfig,
    PeopleServiceEntitySetConfig,
    AirlinesServiceEntitySetConfig,
    AirportsServiceEntitySetConfig,
    MeServiceEntitySetConfig
  ]
} as EntityContainerConfig;
//#endregion