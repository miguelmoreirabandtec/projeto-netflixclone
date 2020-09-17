import React, { useEffect, useState } from 'react';
import './App.css'
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow/MoviesRow';
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header';



function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  // useEffect é usado para quando der reload na page,vai executar o código que esta dentro
  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);


      //Pegando o Featured
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);

    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (

    <div className="page">

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito com <span role="img" aria-aria-label="coração">❤️</span> pelo Miguel Moreira<br />
        Direitos de imagem pata Netflix <br />
        Dados pagos do site Themoviedb.org
      </footer>

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.tenor.com/images/8b27b9071617e0dfc275efdc79e3c51a/tenor.gif" alt="Carregando" />
        </div>
      }
    </div>
  );
}

export default App;
