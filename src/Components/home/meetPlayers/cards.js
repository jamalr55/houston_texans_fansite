import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import Watt from '../../../Resources/images/players/watt.jpg';
import Watson from '../../../Resources/images/players/watson.jpg';
import Hopkins from '../../../Resources/images/players/hopkins.jpg';
import Reid from '../../../Resources/images/players/reid.jpg';
import PlayerCard from '../../ui/playerCard';

class HomeCards extends Component {
  state = {
    cards: [
      {
        bottom: 90,
        left: 300,
        number: "99",
        name: "J.J.",
        lastname: "Watt",
        bck: Watt
      },
      {
        bottom: 60,
        left: 200,
        number: "10",
        name: "DeAndre",
        lastname: "Hopkins",
        bck: Hopkins
      },
      {
        bottom: 30,
        left: 100,
        number: "41",
        name: "Justin",
        lastname: "Reid",
        bck: Reid
      },
      {
        bottom: 0,
        left: 0,
        number: "4",
        name: "Deshaun",
        lastname: "Watson",
        bck: Watson
      }
    ]
  };

  showAnimateCards = () =>
    this.state.cards.map((card, i) => (
      <Animate
        key={i}
        show={this.props.show}
        start={{
          left: 0,
          bottom: 0
        }}
        enter={{
          left: [card.left],
          bottom: [card.bottom],
          timing: { duration: 500, ease: easePolyOut },
          number: [card.number],
          name: [card.name],
          lastname: [card.lastname],
          bck: [card.bck]
        }}
      >
        {({ left, bottom, number, name, lastname, bck }) => {
          return (
            <div
              style={{
                position: 'absolute',
                left,
                bottom
              }}
            >
                <PlayerCard
                  number={number}
                  name={name}
                  lastname={lastname}
                  bck={bck}
                />
            </div>
          );
        }}
      </Animate>
    ));

  render() {
    return <div>{this.showAnimateCards()}</div>;
  }
}

export default HomeCards;
