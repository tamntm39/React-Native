import React from 'react';
import { Data } from '../../data';
import YoutubeItem from './YoutubeItem';
const YoutubeList = () => {
    return (
        <div className="youtube-list">
        {Data.map((item, index) => {
          let newclass = " ";
          if (index ==1) newclass ="abc";
          return (
            <YoutubeItem 
          key={item.id}
          img={item.img}
          avatar={item.avatar || item.img}
          title={item.title}
          author={item.author}
          ></YoutubeItem>
          );
        })}
      </div>
    );
};
export default YoutubeList;