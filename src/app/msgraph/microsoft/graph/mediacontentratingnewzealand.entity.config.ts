import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaContentRatingNewZealand } from './mediacontentratingnewzealand.entity';
import { MediaContentRatingNewZealandModel } from './mediacontentratingnewzealand.model';
import { MediaContentRatingNewZealandCollection } from './mediacontentratingnewzealand.collection';
//#endregion

export const MediaContentRatingNewZealandConfig = {
  name: "mediaContentRatingNewZealand",
  model: MediaContentRatingNewZealandModel,
  collection: MediaContentRatingNewZealandCollection,
  annotations: [],
  fields: {
    movieRating: {type: 'graph.ratingNewZealandMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingNewZealandTelevisionType', nullable: false}
  }
} as EntityConfig<MediaContentRatingNewZealand>;