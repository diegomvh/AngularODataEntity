import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Tone } from './tone.enum';
//#endregion

export const ToneConfig = {
  name: "tone",
  members: Tone
} as EnumTypeConfig<Tone>;