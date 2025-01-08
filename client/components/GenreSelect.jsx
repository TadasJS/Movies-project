import './UpdateStyle.css'

export function GenreSelect(props) {
  return (
    <>
      <option className='update-select' value={`${props.id}`}>{props.genreType}</option>
    </>
  );
}
