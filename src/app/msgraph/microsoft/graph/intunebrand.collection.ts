import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MimeContent } from './mimecontent.entity';
import { IntuneBrand } from './intunebrand.entity';
import { RgbColor } from './rgbcolor.entity';
import { MimeContentModel } from './mimecontent.model';
import { IntuneBrandModel } from './intunebrand.model';
import { RgbColorModel } from './rgbcolor.model';
import { MimeContentCollection } from './mimecontent.collection';
import { RgbColorCollection } from './rgbcolor.collection';
//#endregion

export class IntuneBrandCollection<E extends IntuneBrand, M extends IntuneBrandModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}