import React, {useState} from "react";
import styles from './home.module.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Categories from "../../Data/Categories";
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';

const Home = ({name, setName, fetchQuestions})=>{
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = ()=>{
        if(!category || !difficulty || !name){
            return setError(true)
        }else{
            setError(false);
            fetchQuestions(category, difficulty);
            navigate("/quiz");
        }
    }
    return (
        <>
            
                <h1>Quiz Hub</h1>   
                <Row>
                    <Col>
                        <div className={styles.quizImg} style={{ backgroundImage: 'url("img/quizmen.jpeg")'}}></div>
                    </Col>
                    <Col>
                        <div  className={styles.quizSection}>
                            <h2>Multiple Choice Quiz</h2>
                            {
                                error && <Alert key="danger" className={styles.alert} variant="danger">Please Fill all the feilds</Alert>
                            }
                            <Form className={styles.formStyle}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Enter Your Name</Form.Label>
                                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.selectcat">
                                    <Form.Label>Select Category</Form.Label>
                                    <Form.Select aria-label="select" onChange={(e) => setCategory(e.target.value)} value={category}>
                                        {
                                            Categories && Categories.length > 0 && Categories.map((item)=>{
                                                return (<option key={item.category} value={item.value}>{item.category}</option>)
                                            })
                                        }
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.diff">
                                    <Form.Label>Select Difficulty</Form.Label>
                                    <Form.Select aria-label="select" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                                        <option key="0" value="">Choose one</option>
                                        <option key="Easy" value="easy">Easy</option>
                                        <option key="Medium" value="medium">Medium</option>
                                        <option key="Hard" value="hard">Hard</option>
                                    </Form.Select>
                                </Form.Group>
                                <Button as="input" type="button" className={styles.mybtn} value="Start Quiz" onClick={handleSubmit} />
                                
                            </Form>
                        </div>
                    </Col>
                </Row>
            
        </>
    )
}

export default Home;