import React, { useContext } from 'react';
import { CountContext } from '../App';

function ComponentD() {
  const { count, dispatch } = useContext(CountContext);
  return (
    <div>
      Component D here {count}
      <button onClick={() => dispatch('increment')}>add</button>
      <button onClick={() => dispatch('decrement')}>minus</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  );
}

export default ComponentD;
