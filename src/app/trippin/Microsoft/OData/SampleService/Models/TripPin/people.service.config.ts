//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { PeopleService } from './people.service';
//#endregion

//#region ODataApi EntitySetConfig
export const PeopleServiceEntitySetConfig = {
  name: "People",
  entityType: "Microsoft.OData.SampleService.Models.TripPin.Person",
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Concurrency"
    ]
  },
  {
    "term": "Org.OData.Core.V1.ResourcePath",
    "string": "People"
  },
  {
    "term": "Org.OData.Capabilities.V1.NavigationRestrictions"
  },
  {
    "term": "Org.OData.Capabilities.V1.SearchRestrictions",
    "values": [
      "",
      "Org.OData.Capabilities.V1.SearchExpressions/none"
    ]
  },
  {
    "term": "Org.OData.Capabilities.V1.InsertRestrictions",
    "values": [
      "",
      "TripsFriends"
    ]
  }
],
  service: PeopleService
} as EntitySetConfig;
//#endregion