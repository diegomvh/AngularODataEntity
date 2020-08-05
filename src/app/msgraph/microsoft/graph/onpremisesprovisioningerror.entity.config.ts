import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.entity';
//#endregion

export const OnPremisesProvisioningErrorConfig = {
  name: "onPremisesProvisioningError",
  annotations: [],
  fields: {
    value: {type: 'Edm.String'},
    category: {type: 'Edm.String'},
    propertyCausingError: {type: 'Edm.String'},
    occurredDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<OnPremisesProvisioningError>;