import React, { useContext } from 'react';
import { CountContext } from '../App';

function ComponentF() {
  const { count, dispatch } = useContext(CountContext);

  return (
    <div>
      ComponentF here {count}
      <button onClick={() => dispatch('increment')}>add</button>
      <button onClick={() => dispatch('decrement')}>minus</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  );
}

export default ComponentF;
