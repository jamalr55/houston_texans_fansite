import React, { Component } from 'react';
import PlayerCard from '../ui/playerCard';
import Fade from 'react-reveal/Fade';

import Stripes from '../../Resources/images/blueStripes.png';
import { firebasePlayers, firebase } from '../../firebase';
import { firebaseLooper } from '../ui/misc';
import { Promise } from 'core-js';

class TheTeam extends Component {
  state = {
    loading: true,
    players: []
  };

  componentDidMount() {
    firebasePlayers.once('value').then(snapshot => {
      const players = firebaseLooper(snapshot);
      let promises = [];

      for (let key in players) {
        promises.push(
          new Promise((resolve, reject) => {
            firebase
              .storage()
              .ref('players')
              .child(players[key].image)
              .getDownloadURL()
              .then(url => {
                players[key].url = url;
                resolve();
              });
          })
        );
      }

      Promise.all(promises).then(() => {
        this.setState({
          loading: false,
          players
        });
      });
    });
  }

  showplayersByCategory = category =>
    this.state.players
      ? this.state.players.map((player, i) => {
          return player.position === category ? (
            <Fade left delay={i * 20} key={i}>
              <div className="item">
                <PlayerCard
                  number={player.number}
                  name={player.name}
                  lastname={player.lastname}
                  bck={player.url}
                />
              </div>
            </Fade>
          ) : null;
        })
      : null;

  render() {
    // console.log(this.state.players);
    return (
      <div
        className="the_team_container"
        style={{
          background: `url(${Stripes}) repeat`
        }}
      >
        {!this.state.loading ? (
          <div>
            <div className="team_category_wrapper">
              <div className="title">Offense</div>
              <div className="team_cards">
                {this.showplayersByCategory('Offense')}
              </div>
            </div>

            <div className="team_category_wrapper">
              <div className="title">Defense</div>
              <div className="team_cards">
                {this.showplayersByCategory('Defense')}
              </div>
            </div>

            <div className="team_category_wrapper">
              <div className="title">Special Teams</div>
              <div className="team_cards">
                {this.showplayersByCategory('Special Teams')}
              </div>
            </div>
            
          </div>
        ) : null}
      </div>
    );
  }
}

export default TheTeam;
