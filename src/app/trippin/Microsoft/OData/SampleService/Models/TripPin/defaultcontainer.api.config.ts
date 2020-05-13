import { ApiConfig } from 'angular-odata';


export const DefaultContainerApiConfig = {
  type: "",
  annotations: [
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
} as ApiConfig;