import { EntityContainerConfig } from 'angular-odata';

//#region ODataApi Imports
import { PhotosConfig } from './photos.service.config';
import { PeopleConfig } from './people.service.config';
import { AirlinesConfig } from './airlines.service.config';
import { AirportsConfig } from './airports.service.config';
import { MeConfig } from './me.service.config';
//#endregion

//#region ODataApi EntityContainerConfig
export const DefaultContainerContainer = {
  name: "DefaultContainer",
  annotations: [
  {
    "type": "Org.OData.Core.V1.Description",
    "string": "TripPin service is a sample service for OData V4."
  },
  {
    "type": "Org.OData.Core.V1.DereferenceableIDs",
    "bool": true
  },
  {
    "type": "Org.OData.Core.V1.ConventionalIDs",
    "bool": true
  },
  {
    "type": "Org.OData.Capabilities.V1.ConformanceLevel",
    "values": [
      "Org.OData.Capabilities.V1.ConformanceLevelType/Advanced"
    ]
  },
  {
    "type": "Org.OData.Capabilities.V1.SupportedFormats",
    "values": [
      "application/json;odata.metadata=full;IEEE754Compatible=false;odata.streaming=true",
      "application/json;odata.metadata=minimal;IEEE754Compatible=false;odata.streaming=true",
      "application/json;odata.metadata=none;IEEE754Compatible=false;odata.streaming=true"
    ]
  },
  {
    "type": "Org.OData.Capabilities.V1.AsynchronousRequestsSupported",
    "bool": true
  },
  {
    "type": "Org.OData.Capabilities.V1.BatchContinueOnErrorSupported",
    "bool": false
  },
  {
    "type": "Org.OData.Capabilities.V1.FilterFunctions",
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
    PhotosConfig,
    PeopleConfig,
    AirlinesConfig,
    AirportsConfig,
    MeConfig
  ]
} as EntityContainerConfig;
//#endregion