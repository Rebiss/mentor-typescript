// @ts-ignore
import React from 'react';
// @ts-ignore
import './style/list.css'
// @ts-ignore
import { IList } from '../../Interface/interfaces';

type ListProps = {
  list: IList[],
  onToggle: (id: number) => void,
  onRemove: (id: number) => void,
}

export const List: React.FC<ListProps> = ({ list, onToggle, onRemove }) => {

  if(list.length === 0 ) return <p className='center'>Noting!!!</p> ;
 
  const rmHandle = (ev: React.MouseEvent, id: number) => {
    ev.preventDefault();
    onRemove(id);

  }

  return (
      <ul>
        {list.map( list => {
          const classes = ['list'];
          if( list.completed ) classes.push('completed');

          return (
            <li className={classes.join(' ')} key={list.id}>
              <label>
                <input type="checkbox" checked={list.completed} />
                  <span>{list.title}</span>
                <i className="material-icons red-text" onClick={ev => rmHandle(ev, list.id)}>delete</i>
              </label>
            </li>
          )
        } )}
        
      </ul>
  )
}
