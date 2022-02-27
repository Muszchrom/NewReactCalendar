import FocusTrap from 'focus-trap-react';
import AbsoluteButton from './AbsoluteButton';

export default function Overlay(props) {
  return (
    <FocusTrap>
      <div className="overlay" style={{backgroundColor: props.backgroundColor}}>
        <div className="overlay-inner">
          <AbsoluteButton setOpen={props.setOpen} open={props.open}/>
          {props.children}
        </div>
      </div>
    </FocusTrap>
  );
}
