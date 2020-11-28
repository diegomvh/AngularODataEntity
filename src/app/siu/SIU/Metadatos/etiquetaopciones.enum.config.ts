import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { EtiquetaOpciones } from './etiquetaopciones.enum';
//#endregion

export const EtiquetaOpcionesConfig = {
  name: "EtiquetaOpciones",
  flags: true,
  members: EtiquetaOpciones
} as EnumConfig<EtiquetaOpciones>;