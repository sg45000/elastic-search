import {UserSearch} from '../src/user-search';

let userSearch: UserSearch
beforeAll(() => {
    userSearch = new UserSearch();
})

describe('ElasticSearch Test', () => {
    it('ping', async () => {
        const r = await userSearch.ping();
        console.log(r);
    })

    it('create', async () => {
        const r = await userSearch.create(
            {
                id: '2',
                name: '田中　三郎',
                description: `こちらもGoogleの無料サービス。Google検索に蓄積された検索データをもとに、キーワードの使用頻度や人気キーワードを調べられます。SEO対策に便利ですし、本当の意味での流行を知るにもかなり役に立ってくれます。`
            }

        );
        console.log(r);
    })

    it('search', async () => {
        const r = await userSearch.searchMatchDesc('サービス');
        console.log(r);
    })
})
