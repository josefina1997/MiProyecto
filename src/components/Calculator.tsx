import React from 'react';
import './Calculator.css';

const Calculator: React.FC = () => {
    const [result, setResult] = React.useState<string>('');

    const handleInput = (value: string) => {
        setResult(result + value);
    };

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (e) {
            setResult('Error');
        }
    };

    const clear = () => {
        setResult('');
    };

    return (
        <div className="calculator">
            <input type="text" value={result} readOnly />
            <div className="buttons">
                <button onClick={() => handleInput('1')}>1</button>
                <button onClick={() => handleInput('2')}>2</button>
                <button onClick={() => handleInput('3')}>3</button>
                <button onClick={() => handleInput('+')}>+</button>
                <button onClick={calculate}>=</button>
                <button onClick={clear}>C</button>
            </div>
        </div>
    );
};

export default Calculator;
