import "./EpisodeDetails.css";

export default function EpisodeDetails({ selectedEpisode }) {
  if (!selectedEpisode)
    return (
      <section id="unselected">
        <h2>Choose an episode</h2>
      </section>
    );
  return (
    <section id="selected">
      <h2>Episode {selectedEpisode.id}</h2>
      <h3>{selectedEpisode.title}</h3>
      <p>{selectedEpisode.description}</p>
    </section>
  );
}
