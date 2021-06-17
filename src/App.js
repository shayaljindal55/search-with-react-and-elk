import React, { Component } from "react";
import {
  ReactiveBase,
} from "@appbaseio/reactivesearch";
import "./App.css";
import SingleList from "@appbaseio/reactivesearch/lib/components/list/SingleList";
import ReactiveList from "@appbaseio/reactivesearch/lib/components/result/ReactiveList";
import ResultList from "@appbaseio/reactivesearch/lib/components/result/ResultList";
class App extends Component {
  render() {
    return (
        <div className="main-container">
          <ReactiveBase
              app="countries"
              url="http://localhost:9200"
              theme={{
                colors: {
                  primaryColor: "#41ABF5"
                }
              }}
          >
            <div className="filters-search-container">
              <div className="search-container">
                <SingleList
                    size={300}
                    componentId="CountrySensor"
                    dataField="region.keyword"
                    title="Countries"
                />
              </div>
            </div>
            <div className="result-map-container">
              <ReactiveList
                  componentId="SearchResult"
                  dataField="name"
                  pagination
                  size={10}
                  react={{
                    and: ['CountrySensor'],
                  }}
                  render={({ data }) => (
                      <ReactiveList.ResultListWrapper>
                        {data.map(item => (
                            <ResultList key={item._id}>
                              <ResultList.Image src={item.flag} />
                              <ResultList.Content>
                                <ResultList.Title>
                                  <div
                                      className="book-title"
                                      dangerouslySetInnerHTML={{
                                        __html: item.name,
                                      }}
                                  />
                                </ResultList.Title>
                                <ResultList.Description>
                                  <div className="flex column justify-space-between">
                                    <div>
                                      <div>
                                        Native Name: {' '}
                                        <span className="authors-list">
                                             {item.nativeName}
                                          </span>
                                      </div>
                                    </div>
                                    <div>
                                      <div>
                                        Capital:
                                        <span className="authors-list">
                                             {item.capital}
                                          </span>
                                      </div>
                                    </div>
                                    <span className="pub-year">
                                       Region {item.region}
                                            </span>
                                  </div>
                                </ResultList.Description>
                              </ResultList.Content>
                            </ResultList>
                        ))}
                      </ReactiveList.ResultListWrapper>
                  )}
              />
            </div>
          </ReactiveBase>
        </div>
    );
  }
}
export default App;