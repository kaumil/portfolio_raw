{
  "title": "Sentiment Analyzer",
  "image": "/img/cnn_sentiment_analysis.png",
  "image": "/img/cnn_sentiment_analysis.png",
  "link": "https://github.com/kaumil/cnn_sentiment_analysis",
  "description": "Created a service based on a Tensorflow model which employs Convolutional Neural Networks to perform sentiment analysis to do binary classification. Used TfServing and Docker to orchestrate modeling as well as inference pipeline",
  "tags": ["Flask","Tensorflow","Convolutional Neural Networks","TfServing","Docker","Classification"],
  "fact": "",
  "featured": true
}

Sentiment Analyzer is a ML model as a service made using Flask micro framework. The task is a binary classification problem where I employed CNNs to have a validation accuracy of 84.73% and validation loss of 0.3624. The application serves 2 pipeline: 1 pipeline where the model versions are trained using the jupyter notebook in the sentiment_analysis subfolder. The second pipeline is the inference pipeline where using a config file, Tensorflow Serving is used to deploy that model on a different docker container. The flask and tensorflow container are deployed on the same subnet and orchestrated via docker-compose.
