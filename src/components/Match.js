import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";



//create state for a match set to false
//consume sign from horoscopeContext
//add on click with setMatch
//conditonall render the match if match is true or false
//import in details.js
const Match = () => {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);

  console.log(sign.match);

  return (
    <>
      <button onClick={() => setMatch(!match)}>
        {match ? "Hide Match" : "Reveal Match!"}
      </button>
      {match && <div>{sign.match}</div>}
    </>
  );
};

export default Match;
