import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar/Bar';


const App: React.FC = () =>
{
  const [menuState, setMenuState] = useState<boolean>(true);

  return (
    <div className="App h-screen w-screen flex flex-col justify-end items-center bg-[#00dbac] overflow-hidden">
      <NavigationBar menuState={menuState} setMenuState={setMenuState} />
    </div>
  );
}

export default App;
