import {ElasticSearch} from '../src/elastic-search';

let elasticSearch: ElasticSearch
beforeAll(() => {
    elasticSearch = new ElasticSearch();
})

describe('ElasticSearch Test', () => {
    it('ping', async () => {
        const r = await elasticSearch.ping();
        console.log(r);
    })
})
