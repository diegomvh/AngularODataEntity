import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamFunSettings } from './teamfunsettings.entity';
//#endregion

export const TeamFunSettingsConfig = {
  name: "teamFunSettings",
  annotations: [],
  fields: {
    allowGiphy: {type: 'Edm.Boolean'},
    giphyContentRating: {type: 'graph.giphyRatingType'},
    allowStickersAndMemes: {type: 'Edm.Boolean'},
    allowCustomMemes: {type: 'Edm.Boolean'}
  }
} as EntityConfig<TeamFunSettings>;