import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamFunSettings } from './teamfunsettings.complex';
import { TeamFunSettingsModel } from './teamfunsettings.model';
import { TeamFunSettingsCollection } from './teamfunsettings.collection';
//#endregion

export const TeamFunSettingsConfig = {
  name: "teamFunSettings",
  model: TeamFunSettingsModel,
  collection: TeamFunSettingsCollection,
  annotations: [],
  fields: {
    allowCustomMemes: {type: 'Edm.Boolean'},
    allowGiphy: {type: 'Edm.Boolean'},
    allowStickersAndMemes: {type: 'Edm.Boolean'},
    giphyContentRating: {type: 'graph.giphyRatingType'}
  }
} as StructuredTypeConfig<TeamFunSettings>;