const tmURL = 'https://teachablemachine.withgoogle.com/models/8XhqeyFcN/'

const checkpointURL = tmURL + 'model.json'

// Options for the SpeechCommands18w model, the default probabilityThreshold is 0
const options = { probabilityThreshold: 0.7 };
const classifier = ml5.soundClassifier(checkpointURL, options, modelReady);

function modelReady() {
  // classify sound
  classifier.classify(gotResult);
}

function gotResult(error, result) {
  if (error) {
    console.error(error);
    return;
  }
  // log the result
  console.log(result);
}
