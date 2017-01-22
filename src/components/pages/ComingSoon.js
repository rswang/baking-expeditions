import React from 'react';

class ComingSoon extends React.Component {
  render() {
    return (
      <div className='comingSoon display-flex flex-column align-center'>
        <div className='header-heading'>
          <span>Baking</span>
          <span className='light'>Expeditions</span>
        </div>
        <div className='comingSoon-body'>
          <strong className='cursive cyan'>Hello!</strong> I'm Rachel.
          You found my soon-to-be baking blog! In the meantime, you can find me accelerating
          science at <a href='https://benchling.com/'>Benchling</a>, running along the Embarcadero,
          or baking for the <a href='https://www.instagram.com/rswang/'>Insta</a>.
        </div>
      </div>
    );
  }
}

export default ComingSoon;
