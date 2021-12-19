//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Location } from './location.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const LocationComplexConfig = {
  name: 'Location',
  open: true,
  fields: {
    Address: {type: 'Edm.String', nullable: false},
    City: {type: 'Microsoft.OData.SampleService.Models.TripPin.City', nullable: false}
  }
} as StructuredTypeConfig<Location>;
//#endregion