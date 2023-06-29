
import axios from "axios";

const QUESTION_API_BASE_URL = "http://18.140.238.250:8080/FMAurvadaAPI-0.0.1-SNAPSHOT/question/list";

class QuestionService {

    getQuestions(){
        return axios.get(QUESTION_API_BASE_URL);
    }
    
}

export default new QuestionService();