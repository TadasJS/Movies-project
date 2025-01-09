import './GenreTable.css';
import { UpdateGendre } from './UpdateGenre';
import { DeleteGenre } from './DeleteGenre';

export function GenreTable(props) {
  return (
    <>
      <table className="GenreTable-container">
        <tbody>
          <tr className="table-tr">
            <th className="tableform1">
              {props.id}
            </th>
            <th className="tableform2">
              {props.genreType}
            </th>
            <th className="tableform3">
              <UpdateGendre id={props.id} genreType={props.genreType} />
              <DeleteGenre id={props.id} />
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
}
