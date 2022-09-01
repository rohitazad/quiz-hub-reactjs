import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import  './result.style.scss';
import Button from 'react-bootstrap/Button';


const ResultContainer = ({name, score, setScore, setQuestions})=>{
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(!name){
            handleClick()
        }
        // eslint-disable-next-line
    },[name, navigate])
    const handleClick = ()=>{
        setScore(0);
        setQuestions('')
        return navigate("/");
    }
    return (
        <>
            <div className="scoreWrap">
                <h1>Hi {name},
                <br />Your  Score is {score}</h1>
                <Button variant="primary" onClick={()=>{handleClick()}}>Go to Quiz Page</Button>
            </div>
        </>
    )
}

export default ResultContainer;