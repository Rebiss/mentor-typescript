// @ts-ignore
import React, { useState, useEffect } from "react";
// @ts-ignore
import Navbar from "../Components/Navbar/Navbar";
// @ts-ignore
import Form from "../Components/Form/Form";
// @ts-ignore
import { List } from "../Components/List/List";
// @ts-ignore
import { IList } from '../Interface/interfaces';

declare var confirm: (q: string) => boolean;

//Type React.FC function component TypeScript
const Collection: React.FC = () => {

  const [list, setList] = useState<IList[]>([]);

  useEffect( () => {
    const save = JSON.parse(localStorage.getItem('list') || '[]') as IList[]

    setList(save)
  }, []);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  const onAdd = (title: string) => {
    const newList: IList = {
      title: title,
      id: Date.now(),
      completed: false,
    }

    // setList([ newList, ...list ]) !TODO Bug
    setList( prevState => [newList, ...prevState ])
  }

  const toggleHandler = (id: number) => {
    setList(prevState => prevState.map( list => {
      // if(list.id === id) list.completed != list.completed;

      return list;
    }))
  };

  const removeHandler = (id: number) => {
    const areYouShoud = confirm('Meybe no');

    if(areYouShoud) setList( prevState => prevState.filter( list => list.id !== id)) ;
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Form onAdd={onAdd} />

        <List list={list} onToggle={toggleHandler} onRemove={removeHandler}/>
      </div>
    </>
  );
};

export default Collection;
