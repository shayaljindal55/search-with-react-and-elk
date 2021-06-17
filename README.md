Elasticsearch running on local: \
![Creating](public/elasticsearch-1.PNG "elasticsearch screenshot") \

Kibana running on local:: \
![Creating](public/kibana-1.PNG "kibana screenshot") \

Save data of ElasticSearch: \
curl -s -H "Content-Type: application/x-ndjson" -XPOST localhost:9200/_bulk --data-binary "@countries.txt"