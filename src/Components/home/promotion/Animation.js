import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Jersey from '../../../Resources/images/texansJersey.jpg';

const PromotionAnimation = () => {
  return (
    <div className="promotion_animation">
      <div className="left">
        <Zoom>
          <span>Win a</span>
          <span>Jersey</span>
        </Zoom>
      </div>
      <div className="right">
        <Zoom>
          <div style={{ background: `url(${Jersey}) no-repeat` }} />
        </Zoom>
      </div>
    </div>
  );
};

export default PromotionAnimation;
