import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import  './question.style.scss';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const Question = ({currQues, setCurrQues, score, setScore, options, questions, correct, setQuestions})=>{
    
    const [selected, setSelected] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const handleCheck = (item)=>{
        setSelected(item);
        if(item === correct){
            setScore(score + 1);
        }
        return setError(false);
    }
    const handleSelect = (item)=>{
        //console.log('item', item, 'selected', selected, correct)
        if((selected === item && selected === correct)){
            return ('select')
        }else if(selected === item && selected !== correct){
            return ('wrong')
        }else if((item === correct)){
            return ('select')
        }
       
    }
    const handleQuit = () => {
        setCurrQues(0);
        setQuestions();
        navigate("/");
      };
      const handleNext = ()=>{
        if (currQues > 8) {
            return navigate("/result");
          }else if(selected){
            setCurrQues(currQues + 1);
            return setSelected('')
          }else{
            return setError("Please select an option first")
          }
      }
    return (
        <>
            <div className="questionContainer">
                <h1>Question {currQues + 1} :</h1>
                <div className="singleQuestion">
                    <h2>{questions[currQues].question}</h2>
                        {error && error !== '' ? <Alert key="danger" variant="danger">{error}</Alert> : ''}
                    <div className="options">
                        {
                           options && options.map((item)=>{
                               return (
                                   <>
                                        <Button 
                                            className={`singleOption ${selected && handleSelect(item)}`}
                                            key={item} 
                                            variant="light" 
                                            onClick={()=>{handleCheck(item)}}
                                            disabled={selected}
                                        >
                                            {item}
                                        </Button>
                                   </>
                               )
                           }) 
                        }
                    </div>
                    <div className="btnControl">
                        <Button variant="warning" key="one" onClick={()=>{handleQuit()}}>
                            Quit
                        </Button>
                        <Button variant="primary" key="two" onClick={handleNext}>
                            {currQues > 9 ? "Submit" : "Next Question"}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Question;