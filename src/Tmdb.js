// eslint-disable-next-line no-unused-vars
const API_KEY = 'a97019dc2a136a8d8c46acd4949295c5';
// eslint-disable-next-line no-unused-vars
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originais da netflix
- recomendados
- em alto(top rated)
- ação
- comédia
- romance
- documentários
*/


const basicFetch = async (endpoint) => {
    // Fazendo a requisição do endpoint
    const req = await fetch(`${API_BASE}${endpoint}`);
    // Pegando json da requisição
    const json = await req.json();
    // Retornado o Json
    return json;

}


export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originals do Netflix',
                items: await
                    basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await
                    basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await
                    basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await
                    basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await
                    basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await
                    basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await
                    basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await
                    basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },

        ];

    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            // eslint-disable-next-line default-case
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
            }
        }

        return info;
    }


}