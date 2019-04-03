const frisby = require('frisby');

const { Joi } = frisby;

it('should return 200 when getting a playlists that exists', () => {
  return frisby
          .get('http://localhost:8000/api/playlists')
          .expect('status', 200);
});

// it('should return 204 when deleting a playlist that exists', () => {
//   return frisby
//           .del('http://localhost:8000/api/playlists/6')
//           .expect('status', 204);
// });
//
// it('should return 404 when deleting a playlist that does not exist', () => {
//   return frisby
//           .del('http://localhost:8000/api/playlists/-1')
//           .expect('status', 404);
// });
