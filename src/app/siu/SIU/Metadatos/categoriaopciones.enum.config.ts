import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { CategoriaOpciones } from './categoriaopciones.enum';
//#endregion

export const CategoriaOpcionesConfig = {
  name: "CategoriaOpciones",
  flags: true,
  members: CategoriaOpciones
} as EnumConfig<CategoriaOpciones>;