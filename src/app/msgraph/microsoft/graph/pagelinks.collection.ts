import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ExternalLink } from './externallink.entity';
import { PageLinks } from './pagelinks.entity';
import { ExternalLinkModel } from './externallink.model';
import { PageLinksModel } from './pagelinks.model';
import { ExternalLinkCollection } from './externallink.collection';
//#endregion

export class PageLinksCollection<E extends PageLinks, M extends PageLinksModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}