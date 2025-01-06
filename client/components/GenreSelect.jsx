export function GenreSelect(props) {
  return (
    <>
      <option value={`${props.id}`}>{props.genreType}</option>
    </>
  );
}
