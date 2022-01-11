import {Client} from 'elasticsearch';

export class ElasticSearch {
    client: Client;

    constructor() {
        this.client = new Client({
            host: 'localhost:9200',
            log: 'trace',
            apiVersion: '7.2', // use the same version of your Elasticsearch instance
        });
    }

    async ping(): Promise<boolean> {
        return await this.client.ping({requestTimeout: 1000}) as boolean;
    }
}
