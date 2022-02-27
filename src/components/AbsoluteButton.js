export default function AbsoluteButton(props) {
  return (
    <button className="absolute-button absolute-close-button" onClick={() => props.setOpen(!props.open)}></button>
  );
}
