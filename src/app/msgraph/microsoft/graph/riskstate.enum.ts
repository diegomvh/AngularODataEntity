//#region ODataApi Imports
//#endregion

export const ISFLAGS_RISKSTATE = false;
export enum RiskState {
  //#region ODataApi Members
  none = 0,
  confirmedSafe = 1,
  remediated = 2,
  dismissed = 3,
  atRisk = 4,
  confirmedCompromised = 5,
  unknownFutureValue = 6,
  //#endregion
}
