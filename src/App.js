import React from 'react';
import Split from './composition/Split'
import './App.css'
import Tooltip from './composition/Tooltip'
import Message from './Message';
import TheDate from './state/TheDate';
import Counter from './state/Counter';

const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
    ipsum
  </Tooltip>
);

const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
);

function App() {
  return (
    <main className='App'>
      <Split className="left" flexBasis={2}>
      This is the content for the left `Split`. 
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Incidunt ex velit suscipit facere officia?
        <Tooltip message='one more tooltip message'>
        Necessitatibus?
        </Tooltip>
      </Split>
      <Split className="right">
      This is the content for the right `Split`. 
      Inventore aliquid cupiditate suscipit repellat. 
      Quaerat quis officiis quam fuga. 
      Aliquid quo possimus id soluta aspernatur.
      </Split>

      <Message name="Messages" unread={0}/>
      <Message name="Notifications" unread={10}/>
      <TheDate/>
      <Counter count={123}/>
    </main>
  );
}

export default App;
