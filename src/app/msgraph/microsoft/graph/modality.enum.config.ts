import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { Modality } from './modality.enum';
//#endregion

export const ModalityConfig = {
  name: "Modality",
  members: Modality
} as EnumConfig<Modality>;