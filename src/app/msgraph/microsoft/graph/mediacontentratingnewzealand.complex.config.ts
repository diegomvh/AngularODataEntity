import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaContentRatingNewZealand } from './mediacontentratingnewzealand.complex';
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
} as StructuredTypeConfig<MediaContentRatingNewZealand>;