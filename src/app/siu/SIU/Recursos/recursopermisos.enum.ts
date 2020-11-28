//#region ODataApi Imports
//#endregion

export const ISFLAGS_RECURSOPERMISOS = true;
export enum RecursoPermisos {
  //#region ODataApi Members
  None = 0,
  Admin = 1,
  Share = 2,
  Edit = 4,
  Review = 8,
  Comment = 16,
  View = 32,
  Print = 64,
  Rename = 128,
  Download = 256,
  Viewer = 352,
  Commenter = 368,
  Reviewer = 376,
  Editor = 380,
  ChangeHistory = 512,
  Delete = 1024,
  Owner = 2047,
  //#endregion
}
