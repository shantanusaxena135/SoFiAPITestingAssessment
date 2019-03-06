const frisby = require('frisby');
const Joi = frisby.Joi;

const API_MANAGER = require('../../lib/api_manager');

describe('Getting a tv show with a valid api key', function () {
	
  frisby_response = frisby.get(API_MANAGER.get_tv_show_url(1399));

    it('should return 200 response', function () {
      return frisby_response.expect('status', 200);
    });

    it('should have a valid id field', function () {
      return frisby_response.expect('json', 'id', 1399);
    });

    it('should have a valid homepage field', function () {
      return frisby_response.expect('json', 'homepage', 'http://www.hbo.com/game-of-thrones');
    });

    it('languages field should be an array', function () {
        return frisby_response.expect('jsonTypes', {
          languages: Joi.array()
        });
    });

    it('languages field array should containt string values', function () {
        return frisby_response.expect('jsonTypes', {
          languages: Joi.array().items(Joi.string())
        });
    });

    it('should contain valid last_air_date feild', function () {
        return frisby_response.expect('json', 'last_air_date', '2017-08-27');
    });

    it('last_air_date feild should be a date format', function () {
      return frisby_response.expect('jsonTypes', {
        last_air_date: Joi.date()
      });
    });

    it('should contain valid last_episode_to_air object', function () {
      return frisby_response.expect('jsonTypes', {
        last_episode_to_air: Joi.object()
      });
    });

    it('should have a valid number_of_seasons field', function () {
      return frisby_response.expect('json', 'number_of_seasons', 8);
    });

    it('seasons field should be an array', function () {
        return frisby_response.expect('jsonTypes', {
          seasons: Joi.array()
        });
    });

    it('seasons field array should containt objects', function () {
        return frisby_response.expect('jsonTypes', {
          seasons: Joi.array().items(Joi.object())
        });
    });

    it('objects in seasons field should have valid keys', function () {
        return frisby_response.expect('jsonTypes', {
          seasons: Joi.array().items(Joi.object().keys({
            season_number: Joi.number(),
            id: Joi.number(),
            episode_count: Joi.number(),
            name: Joi.string(),
            poster_path: Joi.string()
          }))
        });
    });

    it('episode_run_time field should be an array', function () {
        return frisby_response.expect('jsonTypes', {
          episode_run_time: Joi.array()
        });
    });

    it('created_by field should be an array', function () {
        return frisby_response.expect('jsonTypes', {
          created_by: Joi.array()
        });
    });

    it('created_by field should containt objects', function () {
        return frisby_response.expect('jsonTypes', {
          created_by: Joi.array().items(Joi.object())
        });
    });

    it('objects in created_by should have valid keys', function () {
        return frisby_response.expect('jsonTypes', {
            created_by: Joi.array().items(Joi.object().keys({
            id: Joi.number(),
            credit_id: Joi.string(),
            gender: Joi.number(),
            profile_path: Joi.string()
          }))
        });
    });

});


// describe('Getting a tv show with invalid api key', function () {

  // frisby_response = frisby.get(API_MANAGER.get_invalid_key_tv_show_url(1399));

    // it('should return status code 7  response for invalid api key', function () {
      // return frisby_response.expect('json', 'status_message', 'Invalid API key: You must be granted a valid key.');
    // });

    

// });
