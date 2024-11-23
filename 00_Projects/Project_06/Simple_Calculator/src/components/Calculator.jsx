import { useState } from 'react';
import Button from './Button';

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === 'C') {
            setInput('');
            setResult('');
        } else if (value === '=') {
            try {
                setResult(eval(input));
            } catch {
                setResult('Error');
            }
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <div className="input">{input || '0'}</div>
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((btn) => (
                    <Button key={btn} value={btn} onClick={handleButtonClick} />
                ))}
            </div>
        </div>
    );
}

export default Calculator;