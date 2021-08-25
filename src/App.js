import React from "react";
import { MyFirstComponent } from './components/myfirstcomponent/myfirstcomponent'
import { Routing } from './routes/Routing'

function App() {
  return (
    <Routing>
      < MyFirstComponent name="Rauf" age="36"/>
    </Routing>
  );
}

export default App;
