/**
 *
 * DataTable
 *
 */

import React from 'react';
import arrow from '../../images/arrow.svg';
import './styles.css';
import likeIcon from '../../images/like.svg';
import dislikeIcon from '../../images/dislike.svg';

function DataTable(props) {

  const favouriteIcon = (item) =>{
    return item.favourite ? likeIcon : dislikeIcon
  }
  return (
    <div className="favlist-table-wrapper">
      <table className="favlist-table">
        <tbody>
          <tr>
            <th onClick={props.sortHandler}>
              Name
              {!props.fav && <img src={arrow}  className={`sort-img ${props.sortAsc ? 'sort-asc' : 'sort-desc'}`}alt="..."/>}
            </th>
            <th className="text-center">Status</th>
            <th className="text-center">Organic</th>
            <th className="text-center">ABV</th>
            <th className="text-center">IBU</th>
            <th className="text-center">Favourite</th>
          </tr>
          {
            props.data && props.data.map((beer, index) => {
              return (
                <tr key={index}>
                  <td>{beer.nameDisplay}</td>
                  <td className="text-center">{beer.status}</td>
                  <td className="text-center">{beer.isOrganic}</td>
                  <td className="text-center">{beer.abv}</td>
                  <td className="text-center">{beer.ibu}</td>
                  <td className="text-center">
                    <img onClick={() => props.makeFavourite(beer)} src={favouriteIcon(beer)} alt='...' className='fav-img' />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

DataTable.propTypes = {};

export default DataTable;
