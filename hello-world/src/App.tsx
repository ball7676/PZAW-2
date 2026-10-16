import "./App.css";

// props dziala na podstawie tworzenia zmiennych jak w np c# tylko w smieszny sposob

type MovieProps = {
    poster: string;
    movieName: string;
    releaseDate: number;
    rating: string;
};

type BookProps = {
    cover: string;
    bookName: string;
    releaseDate: number;
    pageAmount: number;
}

type MusicProps = {
    cover: string;
    albumName: string;
    songList: { title: string }[];
    songArtist: string;
    genre: string;
}

const Movies: MovieProps[] = [
    { poster: "/src/assets/godzillaminusone.png", movieName: "Godzilla Minus One", releaseDate: 2023, rating:"8.1/10"},
    { poster: "/src/assets/jurassicpark3.png", movieName: "Jurassic Park III", releaseDate: 2001, rating:"6.0/10"},
    { poster: "/src/assets/shingodzilla.png", movieName: "Shin Godzilla", releaseDate: 2016, rating: "6.9/10"}
].sort((a, b) => (a.movieName > b.movieName) ? 1 : ((b.movieName > a.movieName) ? -1 : 0));

const Books: BookProps[] = [
    { cover: "/src/assets/lalka.png", bookName: "Lalka", releaseDate: 1890, pageAmount: 688 },
    { cover: "/src/assets/zbrodniaikara.png", bookName: "Zbrodnia i kara", releaseDate: 1866, pageAmount: 496 },
    { cover: "/src/assets/latarnik.png", bookName: "Latarnik", releaseDate: 1882, pageAmount: 32 }
].sort((a, b) => (a.bookName > b.bookName) ? 1 : ((b.bookName > a.bookName) ? -1 : 0));

const Albums: MusicProps[] = [
    { cover: "/src/assets/masterofpuppets.png", albumName: "Master of Puppets | 1986", songArtist: "Metallica", genre: "Thrash Metal",
        songList: [
            { title: "Battery 5:12 min" },
            { title: "Master of Puppets 8:35 min" },
            { title: "The Thing That Should Not Be 6:37 min" },
            { title: "Welcome Home (Sanitarium) 6:27 min" },
            { title: "Disposable Heroes 8:16 min" },
            { title: "Leper Messiah 5:40 min" },
            { title: "Orion 8:27 min" },
            { title: "Damage, Inc. 5:32 min" },
        ]
    },
    { cover: "/src/assets/okcomputer.png", albumName: "OK Computer | 1997", songArtist: "Radiohead", genre: "Alternative Rock",
        songList: [
            { title: "Airbag 4:44 min" },
            { title: "Paranoid Android 6:23 min" },
            { title: "Subterranean Homesick Alien 4:27 min" },
            { title: "Exit Music (For a Film) 4:24 min" },
            { title: "Let Down 4:59 min" },
            { title: "Karma Police 4:21 min" },
            { title: "Fitter Happier 1:57 min" },
            { title: "Electioneering 3:50 min" },
            { title: "Climb Up the Walls 4:45 min" },
            { title: "No Surprises 3:49 min" },
            { title: "Lucky 4:19 min" },
            { title: "The Tourist 5:24 min" },
        ]
    },
    { cover: "/src/assets/thequeenisdead.png", albumName: "The Queen Is Dead | 1986", songArtist: "The Smiths", genre: "Indie Rock",
        songList: [
            { title: "The Queen Is Dead 6:24 min" },
            { title: "Frankly, Mr. Shankly 2:17 min" },
            { title: "I Know It's Over 5:48 min" },
            { title: "Never Had No One Ever 3:36 min" },
            { title: "Cemetry Gates 2:39 min" },
            { title: "Bigmouth Strikes Again 3:12 min" },
            { title: "The Boy with the Thorn in His Side 3:15 min" },
            { title: "Vicar in a Tutu 2:21 min" },
            { title: "There Is a Light That Never Goes Out 4:02 min" },
            { title: "Some Girls Are Bigger Than Others 3:42 min" },
        ]
    }
].sort((a, b) => (a.albumName > b.albumName) ? 1 : ((b.albumName > a.albumName) ? -1 : 0));

function Movie({ poster, movieName, releaseDate, rating }: MovieProps) {
  return (
    <div>
        <img src={poster} />
        <h2>{movieName}</h2>
        <p>{releaseDate}</p>
        <p>Ocena: {rating}</p>
    </div>
  );
}

function Book({ cover, bookName, releaseDate, pageAmount } : BookProps){
    return (
        <div>
            <img src={cover} />
            <h2>{bookName}</h2>
            <p>{releaseDate}</p>
            <p>{pageAmount} Stron</p>
        </div>
    )
}

function Music({ cover, albumName, songArtist, genre, songList }: MusicProps) {
    return (
        <div>
            <img src={cover} />
            <h2>{albumName}</h2>
            <p>Artist: {songArtist}</p>
            <p>Genre: {genre}</p>
            <ol>
                {/* .map bierze kolejny element z tablicy i daje jako argument i potem wypisuje to w liscie. "key" jest potrzebny (bo blad w konsoli jest) zeby kazdy element mial identyfikator */}
                {songList.map(({ title }) => (
                    <li key={title}>{title}</li>
                ))}
            </ol>
        </div>
    )
}
export default function App() {
  return (
    <div className="lists">
        <div className="list">
            {Movies.map(( {poster, movieName, releaseDate, rating} ) => (
                <Movie key={movieName} poster={poster} movieName={movieName} releaseDate={releaseDate} rating={rating} />
            ))}
        </div>

        <div className="list">
            {Books.map(( {cover, bookName, releaseDate, pageAmount} ) => (
                <Book key={bookName} cover={cover} bookName={bookName} releaseDate={releaseDate} pageAmount={pageAmount} />
            ))}
        </div>

        <div className="list">
            {Albums.map(( {cover, albumName, songList, songArtist, genre} ) => (
                <Music key={albumName} cover={cover} albumName={albumName} songArtist={songArtist} genre={genre} songList={songList} />
            ))}
        </div>

            <h1>———————————————————————</h1>

        <div className="list">
            {Movies.filter((movie) => movie.releaseDate > 2010).map(( {poster, movieName, releaseDate, rating} ) => (
                <Movie key={movieName} poster={poster} movieName={movieName} releaseDate={releaseDate} rating={rating} />
            ))}
        </div>

        <div className="list">
            {Books.sort((a, b) => (a.releaseDate > b.releaseDate) ? 1 : ((b.releaseDate > a.releaseDate) ? -1 : 0)).map(( {cover, bookName, releaseDate, pageAmount} ) => (
                <Book key={bookName} cover={cover} bookName={bookName} releaseDate={releaseDate} pageAmount={pageAmount} />
            ))}
        </div>

        <div className="list">
            {Albums.sort((a, b) => b.songList.length - a.songList.length).slice(0, 1).map(({ cover, albumName, songList, songArtist, genre }) => (
                <Music key={albumName} cover={cover} albumName={albumName} songArtist={songArtist} genre={genre} songList={songList} />
            ))}
        </div>
    </div>
  );
}