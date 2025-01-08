import './GenreTable.css';
import { UpdateGendre } from './UpdateGenre';
import { DeleteGenre } from './DeleteGenre';

export function GenreTable(props) {
  return (
    <>
      <table className="GenreTable-container">
        <tbody>
          <tr>
            <td className="tableform1">{props.id}</td>
            <td className="tableform2">{props.genreType}</td>
            <td className="tableform3">
              <UpdateGendre id={props.id} genreType={props.genreType} />
              <DeleteGenre id={props.id} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
