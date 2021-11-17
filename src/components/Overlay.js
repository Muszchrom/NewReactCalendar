import FocusTrap from 'focus-trap-react';
import close from '../graphics/svgs/close_black_24dp.svg'

import AbsoluteButton from './AbsoluteButton';

export default function Overlay(props) {
  return (
    <FocusTrap>
      <div className="overlay" style={{backgroundColor: props.backgroundColor}}>
        <div className="overlay-inner">
          <AbsoluteButton svg={close}/>
          {props.children}
        </div>
      </div>
    </FocusTrap>
  );
}
