import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.entity';
import { OnPremisesProvisioningErrorModel } from './onpremisesprovisioningerror.model';
import { OnPremisesProvisioningErrorCollection } from './onpremisesprovisioningerror.collection';
//#endregion

export const OnPremisesProvisioningErrorConfig = {
  name: "onPremisesProvisioningError",
  model: OnPremisesProvisioningErrorModel,
  collection: OnPremisesProvisioningErrorCollection,
  annotations: [],
  fields: {
    category: {type: 'Edm.String'},
    occurredDateTime: {type: 'Edm.DateTimeOffset'},
    propertyCausingError: {type: 'Edm.String'},
    value: {type: 'Edm.String'}
  }
} as EntityConfig<OnPremisesProvisioningError>;