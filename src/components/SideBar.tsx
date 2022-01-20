import { Button } from "./Button";

interface SideBarProps {
  genres: Genre[],
  selectedGenreId: number,
  setGenreId(n: number): void,
}

export function SideBar(props: SideBarProps) {
  function handleClickButton(genreId: number) {
    props.setGenreId(genreId);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}