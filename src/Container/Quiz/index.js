import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Question from '../../Component/Question';


const QuizContainer = ({name,score, setScore, questions, setQuestions})=>{
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);

    useEffect(()=>{
        setOptions(
            questions && handleShuffle([questions[currQues]?.correct_answer, ...questions[currQues]?.incorrect_answers])
        )
    }, [currQues, questions])
    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
      };
    return (
        <>
            
            
            <div className="quizWrap">
                <h2>Welcome , {name}</h2>
                {
                    questions ? ( 
                        <>
                            <span className="cat">{questions[currQues].category}</span>
                            <span className="score">{score}</span>
                            <Question 
                                currQues={currQues}
                                setCurrQues={setCurrQues}
                                score={score}
                                setScore={setScore}
                                options={options}
                                questions={questions}
                                correct={questions[currQues]?.correct_answer}
                                setQuestions={setQuestions}
                            />
                        </>
                    ) : <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>
                }
                
            </div>
        </>
    )
}

export default QuizContainer;