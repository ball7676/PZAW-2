import "./App.css";

// props dziala na podstawie tworzenia zmiennych jak w np c# tylko w smieszny sposob

type MovieProps = {
  poster: string;
  movieName: string;
  releaseDate: string;
};

type BookProps = {
    cover: string;
    bookName: string;
    releaseDate: string;
}

type MusicProps = {
    cover: string;
    albumName: string;
    songList: string[];
}

// potem z props sie robi funkcje w taki sposob ze daje sie propsy z gory jako argumenty

function Movie({ poster, movieName, releaseDate }: MovieProps) {
  return (
    <div>
        <img src={poster} />
        <h2>{movieName}</h2>
        <p>{releaseDate}</p>
    </div>
  );
}

function Book({ cover, bookName, releaseDate } : BookProps){
    return (
        <div>
            <img src={cover} />
            <h2>{bookName}</h2>
            <p>{releaseDate}</p>
        </div>
    )
}

function Music({ cover, albumName, songList } : MusicProps) {
    return (
        <div>
            <img src={cover} />
            <h2>{albumName}</h2>
            <ul>
                {/* .map bierze kolejny element z tablicy i daje jako argument i potem wypisuje to w liscie. "key" jest potrzebny (bo blad w konsoli jest) zeby kazdy element mial identyfikator */}
                {songList.map((song) => (
                    <li key={song}>{song}</li>
                ))}
            </ul>
        </div>
    )
}
export default function App() {
  return (
    <div className="lists">
        <div className="list">
            {/* i jak sie zrobi funkcje z props to mozna dac wlasny znacznik np tutaj <movie> i sie daje argumenty jakie masz nazwy props */}
            <Movie poster="/src/assets/godzillaminusone.png" movieName="Godzilla Minus One" releaseDate="2023" />
            <Movie poster="/src/assets/jurassicpark3.png" movieName="Jurassic Park III" releaseDate="2001" />
            <Movie poster="/src/assets/shingodzilla.png" movieName="Shin Godzilla" releaseDate="2016" />
        </div>

        <div className="list">
            <Book cover="/src/assets/lalka.png" bookName="Lalka" releaseDate="1890" />
            <Book cover="/src/assets/zbrodniaikara.png" bookName="Zbrodnia i kara" releaseDate="1866" />
            <Book cover="/src/assets/latarnik.png" bookName="Latarnik" releaseDate="1882" />
        </div>

        <div className="list">
            <Music cover="/src/assets/masterofpuppets.png" albumName="Master of Puppets"
                songList={[
                    "Battery",
                    "Master of Puppets",
                    "The Thing That Should Not Be",
                    "Welcome Home (Sanitarium)",
                    "Disposable Heroes",
                    "Leper Messiah",
                    "Orion",
                    "Damage, Inc.",
                ]}
            />
            <Music cover="/src/assets/okcomputer.png" albumName="OK Computer"
                songList={[
                    "Airbag",
                    "Paranoid Android",
                    "Subterranean Homesick Alien",
                    "Exit Music (For a Film)",
                    "Let Down",
                    "Karma Police",
                    "Fitter Happier",
                    "Electioneering",
                    "Climb Up the Walls",
                    "No Surprises",
                    "Lucky",
                    "The Tourist",
                ]}
            />
            <Music cover="/src/assets/thequeenisdead.png" albumName="The Queen Is Dead"
                songList={[
                    "The Queen Is Dead",
                    "Frankly, Mr. Shankly",
                    "I Know It's Over",
                    "Never Had No One Ever",
                    "Cemetry Gates",
                    "Bigmouth Strikes Again",
                    "The Boy with the Thorn in His Side",
                    "Vicar in a Tutu",
                    "There Is a Light That Never Goes Out",
                    "Some Girls Are Bigger Than Others",
                ]}
            />
        </div>
    </div>
  );
}
