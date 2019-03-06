const frisby = require('frisby');
const Joi = frisby.Joi;

const API_MANAGER = require('../../lib/api_manager');

describe('Getting a tv show with invalid tv show id', function () {

  frisby_response = frisby.get(API_MANAGER.get_tv_show_url(0));
  
    it('should return 401 response', function () {
      return frisby_response.expect('status', 404);
    });

    it('should return api status code 34  response for invalid api key', function () {
      return frisby_response.expect('json', 'status_code', 34); 
    });
	
	it('should have a valid status message for invalid api key', function () {
	  return frisby_response.expect('json', 'status_message', 'The resource you requested could not be found.');
    });

});
