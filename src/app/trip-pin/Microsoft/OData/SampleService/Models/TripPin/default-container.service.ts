import { Injectable } from '@angular/core';
import {
  ODataClient,
  ODataActionResource,
  ODataActionOptions,
  ODataFunctionResource,
  ODataFunctionOptions,
  ODataEntitySetService,
  ODataOptions,
  ODataBaseService,
  EntityKey,
} from 'angular-odata';

// #region Custom
// #endregion Custom
@Injectable({ providedIn: 'root' })
export class DefaultContainerService extends ODataBaseService {
  constructor(client: ODataClient) {
    super(client, 'DefaultContainer', 'TripPin');
  }
  // #region Custom
  // #endregion Custom
}
// #region Custom
// #endregion Custom
