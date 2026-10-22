import { useState, type ReactNode } from "react";
import "./App.css";

type MovieProps = {
    poster: string;
    movieName: string;
    releaseDate: number;
    rating: number;
};

type BookProps = {
    cover: string;
    bookName: string;
    releaseDate: number;
    pageAmount: number;
};

type Song = {
    title: string;
    duration: string;
};

type MusicProps = {
    cover: string;
    albumName: string;
    songList: Song[];
    songArtist: string;
    genre: string;
};

const Movies: MovieProps[] = [
    { poster: "/src/assets/godzillaminusone.png", movieName: "Godzilla Minus One", releaseDate: 2023, rating: 8.1 },
    { poster: "/src/assets/jurassicpark3.png", movieName: "Jurassic Park III", releaseDate: 2001, rating: 6.0 },
    { poster: "/src/assets/shingodzilla.png", movieName: "Shin Godzilla", releaseDate: 2016, rating: 6.9 },
].sort((a, b) => a.movieName.localeCompare(b.movieName));

const Books: BookProps[] = [
    { cover: "/src/assets/lalka.png", bookName: "Lalka", releaseDate: 1890, pageAmount: 688 },
    { cover: "/src/assets/zbrodniaikara.png", bookName: "Zbrodnia i kara", releaseDate: 1866, pageAmount: 496 },
    { cover: "/src/assets/latarnik.png", bookName: "Latarnik", releaseDate: 1882, pageAmount: 32 },
    { cover: "/src/assets/harrypotter.png", bookName: "Harry Potter i Zakon Feniksa", releaseDate: 2003, pageAmount: 870 },
];

const Albums: MusicProps[] = [
    {
        cover: "/src/assets/masterofpuppets.png",
        albumName: "Master of Puppets | 1986",
        songArtist: "Metallica",
        genre: "Thrash Metal",
        songList: [
            { title: "Battery", duration: "5:12" },
            { title: "Master of Puppets", duration: "8:35" },
            { title: "The Thing That Should Not Be", duration: "6:37" },
            { title: "Welcome Home (Sanitarium)", duration: "6:27" },
            { title: "Disposable Heroes", duration: "8:16" },
            { title: "Leper Messiah", duration: "5:40" },
            { title: "Orion", duration: "8:27" },
            { title: "Damage, Inc.", duration: "5:32" },
        ],
    },
    {
        cover: "/src/assets/okcomputer.png",
        albumName: "OK Computer | 1997",
        songArtist: "Radiohead",
        genre: "Alternative Rock",
        songList: [
            { title: "Airbag", duration: "4:44" },
            { title: "Paranoid Android", duration: "6:23" },
            { title: "Subterranean Homesick Alien", duration: "4:27" },
            { title: "Exit Music (For a Film)", duration: "4:24" },
            { title: "Let Down", duration: "4:59" },
            { title: "Karma Police", duration: "4:21" },
            { title: "Fitter Happier", duration: "1:57" },
            { title: "Electioneering", duration: "3:50" },
            { title: "Climb Up the Walls", duration: "4:45" },
            { title: "No Surprises", duration: "3:49" },
            { title: "Lucky", duration: "4:19" },
            { title: "The Tourist", duration: "5:24" },
        ],
    },
    {
        cover: "/src/assets/thequeenisdead.png",
        albumName: "The Queen Is Dead | 1986",
        songArtist: "The Smiths",
        genre: "Indie Rock",
        songList: [
            { title: "The Queen Is Dead", duration: "6:24" },
            { title: "Frankly, Mr. Shankly", duration: "2:17" },
            { title: "I Know It's Over", duration: "5:48" },
            { title: "Never Had No One Ever", duration: "3:36" },
            { title: "Cemetry Gates", duration: "2:39" },
            { title: "Bigmouth Strikes Again", duration: "3:12" },
            { title: "The Boy with the Thorn in His Side", duration: "3:15" },
            { title: "Vicar in a Tutu", duration: "2:21" },
            { title: "There Is a Light That Never Goes Out", duration: "4:02" },
            { title: "Some Girls Are Bigger Than Others", duration: "3:42" },
        ],
    },
    {
        cover: "/src/assets/herecomesthecowboy.png",
        albumName: "Here Comes the Cowboy | 2019",
        songArtist: "Mac DeMarco",
        genre: "Indie Rock",
        songList: [],
    },
].sort((a, b) => a.albumName.localeCompare(b.albumName));

function Movie({ poster, movieName, releaseDate, rating }: MovieProps) {
    return (
        <div className="card">
            <img src={poster} className="card-img-top" alt={movieName} />
            <div className="card-body">
                <h2 className="card-title">{movieName}</h2>
                <p className="card-text">{releaseDate}</p>
                <p className="card-text">Ocena: {rating.toFixed(1)}/10</p>
                {rating >= 8 && <span className="badge badge-recommended">Polecany</span>}
            </div>
        </div>
    );
}

function Book({ cover, bookName, releaseDate, pageAmount }: BookProps) {
    return (
        <div className="card">
            <img src={cover} className="card-img-top" alt={bookName} />
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p className="card-text">{releaseDate}</p>
                <p className="card-text">{pageAmount} Stron</p>
                {releaseDate < 2000 && <span className="badge badge-classic">Klasyka</span>}
            </div>
        </div>
    );
}

function Music({ cover, albumName, songArtist, genre, songList }: MusicProps) {
    return (
        <div className="card">
            <img src={cover} className="card-img-top" alt={albumName} />
            <div className="card-body">
                <h2 className="card-title">{albumName}</h2>
                <p className="card-text">Artist: {songArtist}</p>
                <p className="card-text">Genre: {genre}</p>
                {songList.length === 0 ? (
                    <div className="alert alert-warning" role="alert">
                        Brak utworów
                    </div>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-striped table-hover song-table">
                            <thead>
                                <tr>
                                    <th>Tytuł</th>
                                    <th>Czas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {songList.map(({ title, duration }) => (
                                    <tr key={title}>
                                        <td>{title}</td>
                                        <td>{duration}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

type SectionProps = {
    title: string;
    children: ReactNode;
};

function Section({ title, children }: SectionProps) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <section className="section">
            <h2 className="section-header" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "▾" : "▸"} {title}
            </h2>
            {isOpen && <div className="card-grid">{children}</div>}
        </section>
    );
}

export default function App() {
    return (
        <div className="container app">
            <Section title="Filmy">
                {Movies.map((movie) => (
                    <Movie key={movie.movieName} {...movie} />
                ))}
            </Section>

            <Section title="Książki">
                {Books.map((book) => (
                    <Book key={book.bookName} {...book} />
                ))}
            </Section>

            <Section title="Albumy">
                {Albums.map((album) => (
                    <Music key={album.albumName} {...album} />
                ))}
            </Section>

            <hr />

            <Section title="Filmy wydane po 2010">
                {Movies
                    .filter((movie) => movie.releaseDate > 2010)
                    .map((movie) => (
                        <Movie key={movie.movieName} {...movie} />
                    ))}
            </Section>

            <Section title="Książki od najnowszej">
                {[...Books]
                    .sort((a, b) => b.releaseDate - a.releaseDate)
                    .map((book) => (
                        <Book key={book.bookName} {...book} />
                    ))}
            </Section>

            <Section title="Album z największą liczbą utworów">
                {[...Albums]
                    .sort((a, b) => b.songList.length - a.songList.length)
                    .slice(0, 1)
                    .map((album) => (
                        <Music key={album.albumName} {...album} />
                    ))}
            </Section>
        </div>
    );
}