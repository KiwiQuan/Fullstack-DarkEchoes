import "./index.css";
import EpisodeList from "./components/EpisodeList";
import EpisodeDetails from "./components/EpisodeDetails";
import { useState } from "react";
export default function App() {
  // TODO
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodeList
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeDetails selectedEpisode={selectedEpisode} />
      </main>
    </>
  );
}
