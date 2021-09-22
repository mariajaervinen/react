import React, {useState} from 'react';
import './App.css';

export default function Bmi() {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmi, setBmi] =useState(0);

    function handleSubmit(e){
        e.preventDefault();
        const Bodymassindex = parseFloat(weight / (height*height)).toFixed(1);
        setBmi(Bodymassindex);

    }

    return (
        <div>
           <h1>Calculating Body Mass Index</h1>
            <form onSubmit= {handleSubmit}>
                <div>
                    <label>Height</label>
                    <input type='number' value={height} 
                    onChange={e => setHeight(e.target.value)}/>
                </div>
                <div>
                    <label>Weight</label>
                    <input type='number' value={weight}
                    onChange={e => setWeight(e.target.value)} />
                </div>
                <div>
                    <h3>
                        <output>{bmi}</output>
                    </h3>
                </div>
                <button>Calculate</button>
            </form>
        </div>
    )
}
