
import axios from "axios";

const QUESTION_API_BASE_URL = "http://localhost:8080/question/list";

class QuestionService {

    getQuestions(){
        return axios.get(QUESTION_API_BASE_URL);
    }
    
}

export default new QuestionService();