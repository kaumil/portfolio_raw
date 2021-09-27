{
  "title": "Event Analysis using Spark and Elasticsearch",
  "date": "2018-02-11T12:41:05-05:00",
  "image": "/img/circleci-workflow.webp",
  "link": "https://datascienceandengineering.com/project-meta/event-data-analysis-using-spark-and-elasticsearch/",
  "image": "/img/event_analysis_spark_elasticsearch.png",
  "description": "This project aims at building a scalable data analysis pipeline that can ingest events using the New York City leading causes of death data and process them using tools like Apache Spark and Elasticsearch.",
  "tags": ["Apache Spark","Docker", "Elasticsearch"],
  "fact": "",
  "featured": true
}

The aim of this project is to create a data pipeline to ingest, process and analyze data from a remote location. We would use Apache Nifi, a dataflow tool to ingest the data and store it in HDFS. Following that, we would analyze the stored files using Apache Spark and send those files to the Elasticsearch cluster. Furthermore, the entire workflow is containerized to facilitate faster deployments.
