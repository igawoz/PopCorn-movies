import { useState } from "react";
import { useMovies } from "./hooks/useMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

import Main from "./items/Main";
import Box from "./items/Box";
import ErrorMsg from "./items/ErrorMsg";
import NavBar from "./components/NavBar/NavBar";
import NavSearch from "./components/NavBar/NavSearch";
import NavNumResults from "./components/NavBar/NavNumResult";
import MoviesList from "./components/Searched/MoviesList";
import MovieDetails from "./components/Searched/MovieDetails";
import WatchedMoviesList from "./components/Watched/WatchedMoviesList";
import WatchedMoviesSummary from "./components/Watched/WatchedMoviesSummary";

export const KEY = "da5a804f";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <NavSearch query={query} setQuery={setQuery} />
        <NavNumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <p className="loader">Loading...</p>}
          {!isLoading && !error && <MoviesList movies={movies} onSelectMovie={handleSelectMovie} />}
          {error && <ErrorMsg message={error} />}
        </Box>
        <Box>
          <>
            {selectedId ? (
              <MovieDetails
                selectedId={selectedId}
                onCloseMovie={handleCloseMovie}
                onAddWatched={handleAddWatched}
                watched={watched}
              />
            ) : (
              <>
                <WatchedMoviesSummary watched={watched} />
                <WatchedMoviesList watched={watched} onDeleteWatched={handleDeleteWatched} />
              </>
            )}
          </>
        </Box>
      </Main>
    </>
  );
}

// ErrorMsg

// NavBar

// NavLogo

// NavSearch

// NavNumResult

// Main

// Box

//MoviesList

// Movie

// MovieDetails

// WatchedMoviesSummary

// WatchedMoviesList

// WatchedMovie
