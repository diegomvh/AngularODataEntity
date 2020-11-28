import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AlertFeedback } from './alertfeedback.enum';
//#endregion

export const AlertFeedbackConfig = {
  name: "alertFeedback",
  members: AlertFeedback
} as EnumTypeConfig<AlertFeedback>;