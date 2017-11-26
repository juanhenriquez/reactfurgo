import React from 'react';
import './../styles/components/player-mini-card.css';

const PlayerMiniCard = (props) => {
  return (
    <div className="player-mini-card">
      <div className="player__profile-picture">
        <img src="" />
      </div>
      <div className="player-info">
        <h2 className="player-info__name">{ props.player.name }</h2>
        <div className="player-info__container">
          <div className="player-info__details">
            <p className="player-info__detail"><span>Country: </span>{ props.player.country }</p>
            <p className="player-info__detail"><span>Position: </span>{ props.player.position }</p>
            <p className="player-info__detail"><span>Age: </span>{ props.player.age }</p>
          </div>
          <h4 className="player-info__number">{ props.player.number }</h4>
        </div>
      </div>
    </div>
  );
}

export default PlayerMiniCard;