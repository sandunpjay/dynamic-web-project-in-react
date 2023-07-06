
import axios from "axios";

const QUESTION_API_BASE_URL = "http://localhost:8080/question/";

class QuestionService {

    getQuestions(){
        return axios.get(QUESTION_API_BASE_URL+'list');
    }
    
}

export default new QuestionService();