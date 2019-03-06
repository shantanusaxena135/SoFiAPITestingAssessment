const frisby = require('frisby');
const Joi = frisby.Joi;

const API_MANAGER = require('../../lib/api_manager');

describe('Getting a tv show with invalid api key', function () {

  frisby_response = frisby.get(API_MANAGER.get_invalid_key_tv_show_url(1399));
  
    it('should return 401 response', function () {
      return frisby_response.expect('status', 401);
    });

    it('should return status code 7  response for invalid api key', function () {
      return frisby_response.expect('json', 'status_code', 7); 
    });
	
	it('should have a valid status message for invalid api key', function () {
	  return frisby_response.expect('json', 'status_message', 'Invalid API key: You must be granted a valid key.');
    });

});
