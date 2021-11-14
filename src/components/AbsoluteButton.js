export default function AbsoluteButton(props) {
  return (
    <button className="absolute-button">
      <img className="buttons-svg" src={props.svg} alt="Button"/>
    </button>
  );
}
