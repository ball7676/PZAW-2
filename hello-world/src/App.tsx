import "./App.css";

// props dziala na podstawie tworzenia zmiennych jak w np c# tylko w smieszny sposob

type MovieProps = {
  poster: string;
  movieName: string;
  releaseDate: number;
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

function Music({ cover, albumName, songList } : MusicProps) {
    return (
        <div>
            <img src={cover} />
            <h2>{albumName}</h2>
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
            {/* i jak sie zrobi funkcje z props to mozna dac wlasny znacznik np tutaj <movie> i sie daje argumenty jakie masz nazwy props */}
            <Movie poster="/src/assets/godzillaminusone.png" movieName="Godzilla Minus One" releaseDate={2023} />
            <Movie poster="/src/assets/jurassicpark3.png" movieName="Jurassic Park III" releaseDate={2001} />
            <Movie poster="/src/assets/shingodzilla.png" movieName="Shin Godzilla" releaseDate={2016} />
        </div>

        <div className="list">
            <Book cover="/src/assets/lalka.png" bookName="Lalka" releaseDate={1890} pageAmount={688} />
            <Book cover="/src/assets/zbrodniaikara.png" bookName="Zbrodnia i kara" releaseDate={1866} pageAmount={496} />
            <Book cover="/src/assets/latarnik.png" bookName="Latarnik" releaseDate={1882} pageAmount={32} />
        </div>

        <div className="list">
            <Music cover="/src/assets/masterofpuppets.png" albumName="Master of Puppets | 1986" songArtist="Metallica"  genre="Thrash Metal"
                songList={[
                    { title: "Battery 5:12 min" },
                    { title: "Master of Puppets 8:35 min" },
                    { title: "The Thing That Should Not Be 6:37 min" },
                    { title: "Welcome Home (Sanitarium) 6:27 min" },
                    { title: "Disposable Heroes 8:16 min" },
                    { title: "Leper Messiah 5:40 min" },
                    { title: "Orion 8:27 min" },
                    { title: "Damage, Inc. 5:32 min" },
                ]}
            />
            <Music cover="/src/assets/okcomputer.png" albumName="OK Computer | 1997" songArtist="Radiohead" genre="Alternative Rock"
                songList={[
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
                ]}
            />
            <Music cover="/src/assets/thequeenisdead.png" albumName="The Queen Is Dead | 1986" songArtist="The Smiths" genre="Indie Rock"
                songList={[
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
                ]}
            />
        </div>
    </div>
  );
}
