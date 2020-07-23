{
  "title": "Emof_AI",
  "date": "2018-02-11T12:41:05-05:00",
  "image": "/img/circleci-workflow.webp",
  "link": "https://github.com/kaumil/emof_ai",
  "image": "/img/emofai_proj.png",
  "description": "Emof_ai is a web API which takes a sample video as an input, detects all the faces in each frame of the video and performs classfication. It classifies the emotion of the face into 1 of 8 emotions viz anger, disgust, fear, happy, sad, surprise, neutral and none(this is when there are no faces detected in the frame at all and hence none means no emotion detected in the frame at all). It also classifies the gender of the person. In addition to that, it also classifies the age group of the person into 1 of 4 age groups viz adult, child, old and youth.",
  "tags": ["Convolutional Neural Networks","Keras", "Flask", "Matplotlib", "OpenCV"],
  "fact": "",
  "featured": true
}

Emof_ai is a web API which takes a sample video as an input, detects all the faces in each frame of the video and performs classfication. It classifies the emotion of the face into 1 of 8 emotions viz anger, disgust, fear, happy, sad, surprise, neutral and none(this is when there are no faces detected in the frame at all and hence none means no emotion detected in the frame at all). It also classifies the gender of the person. In addition to that, it also classifies the age group of the person into 1 of 4 age groups viz adult, child, old and youth.

There are 3 models for each of the 3 tasks. The face detection is done using haarcascade xml and the classification is done using 3 convolutional neural networks, each for one of the 3 tasks and made up of 5 layers. After the processing of the video is done, a data analysis graph is constructed and shown which determines the percent count of each emotion in the video. The percentage of each emotion shows the percentage of detection boxes detected with that emotion. Each emotion is grouped by the gender and the age group. Flask framework is used for the creation of the web API.
