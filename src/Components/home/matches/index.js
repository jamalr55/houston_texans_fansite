import React from 'react';
import { Tag } from '../../ui/misc';
import Blocks from './Blocks';

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag bck="#011341" size="50px" color="#ffffff">
          Games
        </Tag>

        <Blocks />

        <Tag
          bck="#ffffff"
          size="22px"
          color="#011341"
          link={true}
          linkto="/the_matches"
        >
          See more games
        </Tag>
      </div>
    </div>
  );
};

export default MatchesHome;
