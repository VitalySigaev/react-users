import '../../App.scss';

function Game({ question, questions, onClickVariant, step }) {
    const percentage = Math.round(step / questions.length * 100);
    return (
        <div>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((answer, index) => { return <li onClick={() => onClickVariant(index)} key={index}>{answer}</li> })}
            </ul>
        </div>
    );
}
export default Game;