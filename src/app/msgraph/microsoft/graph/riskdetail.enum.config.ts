﻿import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RiskDetail } from './riskdetail.enum';
//#endregion

export const RiskDetailConfig = {
  name: "riskDetail",
  members: RiskDetail
} as EnumConfig<RiskDetail>;