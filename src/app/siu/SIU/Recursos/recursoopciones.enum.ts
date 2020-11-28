//#region ODataApi Imports
//#endregion

export const ISFLAGS_RECURSOOPCIONES = true;
export enum RecursoOpciones {
  //#region ODataApi Members
  None = 0,
  Private = 1,
  Office = 2,
  Public = 4,
  Document = 8,
  Template = 16,
  File = 32,
  Link = 64,
  Detached = 128,
  Deleted = 256,
  Finalized = 512,
  Signed = 1024,
  Presented = 2048,
  Diligenced = 4096,
  //#endregion
}
