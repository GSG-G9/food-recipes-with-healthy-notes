const supertest = require('supertest');
const { getHealthData, getRecipeData } = require('../controlles/handlers');
const app = require('../app');

const pizzaResult = {
  ENERC_KCAL: { label: 'Energy', quantity: 2620.983838835843, unit: 'kcal' },
  PROCNT: { label: 'Protein', quantity: 73.06396909756897, unit: 'g' },
  FAT: { label: 'Fat', quantity: 70.85852721973856, unit: 'g' },
  SUGAR: { label: 'Sugars', quantity: 30.215096388254253, unit: 'g' },
  CHOCDF: { label: 'Carbs', quantity: 422.0246006775219, unit: 'g' },
  CHOLE: { label: 'Cholesterol', quantity: 108.68666666666667, unit: 'mg' },
  weight: 100,
};
test('test post /health', (done) => {
  supertest(app)
    .post('/health')
    .send({
      value: 'pizza',
    })
    .set('Content-Type', 'application/json')
    .expect(200)
    .expect((res) => {
      res.body.weight = 100;
    })
    .end((err, res) => {
      if (err) done(err);
      expect(res.body).toEqual(pizzaResult);
      done();
    });
});

test('POST /recipe', (done) => {
  supertest(app)
    .post('/recipe')
    .send({ value: 'meat' })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      done();
    });
});
