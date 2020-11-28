import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { MobileAppContentFileUploadState } from './mobileappcontentfileuploadstate.enum';
import { FileEncryptionInfo } from './fileencryptioninfo.entity';
import { MobileAppContentFile } from './mobileappcontentfile.entity';
import { FileEncryptionInfoModel } from './fileencryptioninfo.model';
import { FileEncryptionInfoCollection } from './fileencryptioninfo.collection';
import { MobileAppContentFileCollection } from './mobileappcontentfile.collection';
//#endregion

export class MobileAppContentFileModel<E extends MobileAppContentFile> extends EntityModel<E> {
  //#region ODataApi Properties
  azureStorageUri?: string;
  azureStorageUriExpirationDateTime?: Date;
  createdDateTime: Date;
  isCommitted: boolean;
  manifest?: ArrayBuffer;
  name?: string;
  size: number;
  sizeEncrypted: number;
  uploadState: MobileAppContentFileUploadState;
  //#endregion
  //#region ODataApi Actions
  public commit(fileEncryptionInfo: FileEncryptionInfo, options?: HttpOptions): Observable<any> {
    var res = this._action<{fileEncryptionInfo: FileEncryptionInfo}, any>('microsoft.graph.commit');
    res.segment.entitySet('');
    return res.call({fileEncryptionInfo}, 'property', options) as Observable<any>;
  }
  public renewUpload(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.renewUpload');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}