import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import UserInfo from './UserInfo';

function App() {
    return (<>
        <Header/>
        <UserInfo/>
            </>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
