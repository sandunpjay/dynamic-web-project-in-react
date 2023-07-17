import React from 'react'
import { Form, Button } from 'react-bootstrap';
import './../App.css'
import './home.css'
import Q from '../images/q.jpg';
import { Component } from 'react';
import QuestionService from '../services/QuestionService'
import {LinkContainer} from 'react-router-bootstrap'
import ques from './../ques.json'


class BeautyAndWellnessProgram extends Component{

    
  
  //constructor(props){
   //   super(props);
  //    this.state ={
  //      questions :[]
  //    }
 // }

  //componentDidMount(){
    //QuestionService.getQuestions().then((res)=>{
   // this.setState({ questions :ques.data})
    //});
  //} //this.state.questions.map
  


  render() {
    return (
     <div>

        <div className='text-center header-background'>
            <span className='header-text-xx'>QUESTIONAIRE - BEAUTY AND WELNESS PROGRAMS</span>
        </div>

        <div className='ps-5 pe-5 ms-5 mt-5 me-5 mb-5 qa-text'>
        <Form>

         

        {ques.map(question => {         
          if (question.answerType.type === 'radio') {
            // Render radio buttons
            return (
              <div key={question.questionId}>
                <Form.Label>{question.questionText}</Form.Label>
                {question.questionAnswers.map(answer => (
                  <Form.Check
                    key={answer.questionAnswerId}
                    name="groupOptions"
                    label={answer.answerText}
                    type="radio"
                    id={answer.questionAnswerId}
                  />
                ))}
                <hr />
              </div>
            );
          } else if(question.answerType.type === 'textbox') {
            // Render other content
            return (
              <div key={question.questionId}>
                <Form.Label>{question.questionText}</Form.Label>
                <div>
                <Form.Control type="text" width={200}/>
                </div>
                <hr />
              </div>
            );
          }
        })}
         <LinkContainer to="/perfect-match">
         <Button type="submit"  className='btn btn-custom mt-5' >Find Hotels</Button>
          </LinkContainer>
        
       </Form>
      </div>


        

        <div className='bg-image'>      
         <img className='d-block w-100 img-fluid' src={Q}></img>        
        </div>



      
      </div>
    )
  }
}

export default BeautyAndWellnessProgram