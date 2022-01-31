import {Client} from '@elastic/elasticsearch';
import {User} from './schema/user';
import {query} from 'express';

export class ElasticSearch {
    client: Client;

    constructor() {
        this.client = new Client({
            node: 'http://localhost:9200',
        });
    }

    async ping(): Promise<boolean> {
        const result = await this.client.ping();
        return result.body;
    }
}
