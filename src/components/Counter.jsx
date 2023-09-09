import './Counter.css';

const Counter = ({Title, number}) => {
    return (
        <div className="counter">
            <p className="counter-number">{number}</p>
            <h3 className="counter-text">{Title}</h3>
        </div>
    )
}

export default Counter