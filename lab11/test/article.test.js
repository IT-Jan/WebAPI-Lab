const request = require('supertest');
const app = require('./app.test');

const expected = {
    "id": 1,
    "title": "title 1",
    "alltext": "some stuff",
    "summary": null,
    "datecreated": "2025-02-27T09:20:34.913Z",
    "datemodified": "2025-02-27T09:20:34.913Z",
    "imageurl": null,
    "published": null,
    "authorid": 1
}

describe('Get all articles', () => {
    it('Return all articles', async() => {
        const res = await request(app.callback())
            .get('/api/v1/articles')
            .send({})
        expect(res.statusCode).toEqual(200);
        expect(res.type).toEqual("application/json");
        expect(res.body).toContainEqual(expected);
    })
})