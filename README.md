![Creating](public/elasticsearch.PNG "elasticsearch screenshot")
![Creating](public/kibana.PNG "kibana screenshot")

Save data of ElasticSearch:
curl -s -H "Content-Type: application/x-ndjson" -XPOST localhost:9200/_bulk --data-binary "@countries.txt"