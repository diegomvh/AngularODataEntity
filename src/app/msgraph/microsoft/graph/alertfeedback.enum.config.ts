import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { AlertFeedback } from './alertfeedback.enum';
//#endregion

export const AlertFeedbackConfig = {
  name: "AlertFeedback",
  members: AlertFeedback
} as EnumConfig<AlertFeedback>;