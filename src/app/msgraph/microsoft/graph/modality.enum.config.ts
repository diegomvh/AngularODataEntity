import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { Modality } from './modality.enum';
//#endregion

export const ModalityConfig = {
  name: "modality",
  members: Modality
} as EnumConfig<Modality>;