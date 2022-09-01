import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import HeaderComponent from "../Component/Header";
import FooterComponent from "../Component/Footer";
import Home from "../Container/Home";
import QuizContainer from "../Container/Quiz";
import ResultContainer from "../Container/Result";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Contact from '../Container/Contact';

const RoutesPages = ()=>{
    const [name, setName] = useState('');
    const [questions, setQuestions] = useState();
    const [score, setScore] = useState(0);

    const fetchQuestions = async (category="", difficulty="")=>{
        //console.log('category', category, '_difficulty_', difficulty);
        const {data} = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
        console.log('da', data)
        setQuestions(data.results)
    }
    return (
        <>
            <Router>
                <HeaderComponent />
                <div className="containerWrap">
                    <Container fluid="md" className="homewrap">
                        <Routes>
                            <Route path="/" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>} />
                            <Route path="/quiz" element={<QuizContainer name={name} score={score} setScore={setScore} questions={questions} setQuestions={setQuestions}/>} />
                            <Route path="/result" element={<ResultContainer name={name} score={score} setScore={setScore}  setQuestions={setQuestions}/>} />
                            <Route path="/contact" element={<Contact />} />
                            
                        </Routes>
                    </Container>
                </div>
                <FooterComponent />
            </Router>
            
        </>
    )
}

export default RoutesPages;