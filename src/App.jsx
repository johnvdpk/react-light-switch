import React, {useState} from 'react';
import './App.css';

function App() {

    const [light, setLight] = useState('');
    console.log({light})

    return (
        <main className="off">
            <section>
                <div className='dot'></div>
                <button type="button"
                        className={light  ? 'active' : 'button'}
                        onClick={()=>setLight('ON')}

                >{light}</button>

            </section>
        </main>
    );
}

export default App;
