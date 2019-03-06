const CONFIG = require('../../config');

base_url = CONFIG.API_DOMAIN;
api_key = CONFIG.API_KEY;

function get_tv_show_url(tv_show_id){
  /*
 * Returns the GET TV show url string from api.moviedb.com
 * @param {String} $tv_show_id - id of the TV show to be retireved
 * @return {String} url string for the GET Tv show url
 */
  return create_complete_url('tv/' + tv_show_id.toString());
}

function create_complete_url(endpoint_url) {
  /*
 * fabricates the complete url with api key from the endpoint url
 * @param {String} endpoint_url - endpoint url to fabricate complete url
 * @return {String} complete url string for any endpoint url
 */
  return base_url + endpoint_url + '?api_key=' + api_key.toString();
}

function get_invalid_key_tv_show_url(tv_show_id){
  /*
 * Returns the GET TV show url string from api.moviedb.com
 * @param {String} $tv_show_id - id of the TV show to be retireved
 * @return {String} url string for the GET Tv show url
 */
  return base_url + 'tv/' + tv_show_id.toString() + '?api_key=abc_key';
}

module.exports = {
    get_tv_show_url: get_tv_show_url,
	get_invalid_key_tv_show_url: get_invalid_key_tv_show_url
}
