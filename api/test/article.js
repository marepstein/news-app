process.env.NODE_ENV = 'test';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';
let should = chai.should();

chai.use(chaiHttp);

describe('/GET articles', () => {
    it('should get all the articles', (done) => {
        chai.request(server)
            .get('/api/articles')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});

describe('GET /articles', () => {
    it('returns all articles, limited to 10 per page', (done) => {
        chai.request(server)
            .get('/api/articles')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.articles.length.should.eql(10);
                done();
            });
    });
});
