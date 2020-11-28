import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface OnPremisesProvisioningError {
  //#region ODataApi Properties
  category?: string;
  occurredDateTime?: Date;
  propertyCausingError?: string;
  value?: string;
  //#endregion
}