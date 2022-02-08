import React from 'react';
// using hook | import counter component
import CounterHook from './usingHooks/components/CounterHook';

// without hook | import counter component
// import Counter from './withoutHook/components/Counter';


function App() {
  return (
    <div className="App">
      {
        // Counter component using Hook
        <CounterHook />
      // Counter component without Hook
      //<Counter /> 
    }
    </div>
  );
}

export default App;
