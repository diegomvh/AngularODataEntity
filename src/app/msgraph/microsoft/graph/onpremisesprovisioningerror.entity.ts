import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface OnPremisesProvisioningError {
  //#region ODataApi Properties
  value?: string;
  category?: string;
  propertyCausingError?: string;
  occurredDateTime?: Date;
  //#endregion
}