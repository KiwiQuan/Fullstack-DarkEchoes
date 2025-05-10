import "./EpisodeList.css";
import { episodeList } from "../data";

export default function EpisodeList({ selectedEpisode, setSelectedEpisode }) {
  return (
    <section className="episode-list">
      <h2>Episodes:</h2>
      <ul>
        {episodeList.map((episode) => (
          <li
            key={episode.id}
            onClick={() => {
              setSelectedEpisode(episode);
              console.log(episode);
            }}
          >
            {episode.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
