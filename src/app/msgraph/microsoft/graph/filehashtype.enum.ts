//#region ODataApi Imports
//#endregion

export const ISFLAGS_FILEHASHTYPE = false;
export enum FileHashType {
  //#region ODataApi Members
  unknown = 0,
  sha1 = 1,
  sha256 = 2,
  md5 = 3,
  authenticodeHash256 = 4,
  lsHash = 5,
  ctph = 6,
  unknownFutureValue = 127,
  //#endregion
}
