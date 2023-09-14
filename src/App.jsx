import React, {useState} from 'react';
import './App.css';

function App() {

    const [light, setLight] = useState('OFF');
    console.log({light})

    const toggleLight = () => {
        setLight(light === 'ON' ? 'OFF' : 'ON');
    };

    return (
        <main className="off">
            <section>
                <div className={light === 'ON'? 'dot' : 'off.dot'}></div>
                <button type="button"
                        className={light  ? 'active' : 'button'}
                        onClick={toggleLight}

                >{light}</button>

            </section>
        </main>
    );
}

export default App;
