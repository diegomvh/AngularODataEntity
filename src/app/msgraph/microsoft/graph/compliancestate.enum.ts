//#region ODataApi Imports
//#endregion

export const ISFLAGS_COMPLIANCESTATE = false;
export enum ComplianceState {
  //#region ODataApi Members
  unknown = 0,
  compliant = 1,
  noncompliant = 2,
  conflict = 3,
  error = 4,
  inGracePeriod = 254,
  configManager = 255,
  //#endregion
}
