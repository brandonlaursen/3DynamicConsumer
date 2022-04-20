import { useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';
import horoscopesObj from '../data/horoscopes';

const Navbar = () => {
  //consume horoscope context
  //use the setCurrentSign in onClick pass in sign
  const { setCurrentSign } = useContext(HoroscopeContext)
  const horoscopes = Object.keys(horoscopesObj);

  console.log('Navbar component rendering');

  return (
    <nav>
      {horoscopes.map(sign => (
        <span key={sign} onClick={() => setCurrentSign(sign)}>
          {sign}
        </span>
      ))}
    </nav>
  )
};

export default Navbar;
