import {ElasticSearch} from './elastic-search';
import {User} from './schema/user';

export class UserSearch extends ElasticSearch {
    async create(user: User) {
        const result = await this.client.create<User, User>({
            id: user.id,
            index: 'user',
            body: {
                id: user.id,
                name: user.name,
                description: user.description,
            }
        });
        return result;
    }

    async searchMatchDesc(descKeyWord: string) {
        const result = await this.client.search<User>({
            index: 'user',
            body: {
                query: {
                    match: {
                        description: descKeyWord
                    }
                }
            }
        })
        return result;
    }
}
