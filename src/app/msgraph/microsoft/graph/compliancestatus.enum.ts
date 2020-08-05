﻿//#region ODataApi Imports
//#endregion

export const ISFLAGS_COMPLIANCESTATUS = false;
export enum ComplianceStatus {
  //#region ODataApi Members
  unknown = 0,
  notApplicable = 1,
  compliant = 2,
  remediated = 3,
  nonCompliant = 4,
  error = 5,
  conflict = 6,
  notAssigned = 7,
  //#endregion
}
