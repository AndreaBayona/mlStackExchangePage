import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Answer } from "../models/Answer";
import { ClassificationRequest } from "../services";
import PickEvaluator from "./PickEvaluator/index";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { AppStyle, Header } from "./AppStyles";
import { PickAnswersSet } from "./PickAnswersSet/index";
import {
  getClassifiedAnswers,
  getUnclassifiedAnswers,
  findQuestionById,
  classificateAQuestion,
} from "../services/index";

function App() {
  React.useEffect(() => {
    const user = { user: "Valerie" };
    getClassifiedAnswers(user).then((ans) => {
      const answers = ans as Answer[];
      console.log(answers[0].question[0].QTags); // Aquí se haría la asignación al estado
    });
  });

  React.useEffect(() => {
    const user = { user: "Valerie" };
    getUnclassifiedAnswers(user).then((ans) => {
      const answers = ans as Answer[];
      console.log(answers[0].question[0].QTags); // Aquí se haría la asignación al estado
    });
  });

  React.useEffect(() => {
    const id = { id: 50259726 };
    findQuestionById(id).then((ans) => {
      const answer = ans as Answer;
      console.log(answer); // Aquí se haría la asignación al estado. Si está mal el id lega undefined
    });
  });

  React.useEffect(() => {
    const classificationRequest = {
      AID: 50259726,
      classification: {
        typeOfLearning: "typeOfLearning2",
        typeOfArchitecture: "typeOfArchitecture",
        processingModel: "processingModel",
        mlPipeline: "mlPipeline",
        goodPractice: "goodPractice",
        pitfall: "pitfall",
        externalReferences: "externalReferences",
        interesting: "interesting",
      },
    } as ClassificationRequest;
    classificateAQuestion(classificationRequest).then((ans) => {
      console.log(ans);
    });
  });
  return (
    <Router>
      <AppStyle>
        <Header>
          <Link to="/">Home</Link>
        </Header>
        <Switch>
          <Route exact path="/" component={PickEvaluator} />
          <Route
            exact
            path="/pickAnswers/:username"
            component={PickAnswersSet}
          />
        </Switch>
      </AppStyle>
    </Router>
  );
}

export default App;
