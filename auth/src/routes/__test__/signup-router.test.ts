import request from 'supertest';
import { app } from '../../app';

it('Returns 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      firstName: 'Masu',
      lastName: 'Musole',
      email: 'musolewinner@gmail.com',
      password: 'pass',
      phoneNumber: '00243853397653',
      address: {
        street: 'Av du Musee 31 bis',
        city: 'Goma',
        state: 'Nord Kivu',
      },
    })
    .expect(201);

    
});
