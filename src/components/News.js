import React, { useState, useEffect, useCallback } from 'react';
import NewsItem from './NewsItem';
import LoadingSpinner from './loadingSpinner';
import PropTypes from 'prop-types';

const News = ({ pageSize, country, category }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = `ChimBuzz - ${category.charAt(0).toUpperCase() + category.slice(1)} News`;
  }, [category]);

  const updatefn = useCallback(async () => {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY; 
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true);
    try {
      const response = await fetch(url);
      const parsedata = await response.json();
      setArticles(parsedata.articles);
      setTotalResults(parsedata.totalResults);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  }, [country, category, page, pageSize]);

  useEffect(() => {
    updatefn();
  }, [updatefn]);

  const prevfn = () => {
    setPage(prevPage => prevPage - 1);
  };

  const nextfn = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="container1 mx-5">
      <h1 className='h1class'>
        {category === "general" ? "Today's top Headlines" : `Today's top ${category.charAt(0).toUpperCase() + category.slice(1)} Headlines`}
      </h1>
      <div className='spinnerClass'>
        {loading && <LoadingSpinner />}
      </div>
      <div className='row'>
        {!loading && articles.map((element) => (
          <div className='col-md-4' key={element.url}>
            <NewsItem 
              title={element.title || ""} 
              description={element.description || ""}  
              imgurl={element.urlToImage} 
              newsurl={element.url} 
              author={element.author} 
              date={element.publishedAt} 
            />
          </div>
        ))}
      </div>
      <div className='d-flex justify-content-between my-7'>
        <button 
          disabled={page <= 1} 
          type="button" 
          className="btn btn-success" 
          onClick={prevfn} 
          style={{ marginLeft: "0.7rem" }}
        >
          &larr; Previous
        </button>
        <button 
          disabled={Math.ceil(totalResults / pageSize) <= page} 
          type="button" 
          className="btn btn-success" 
          onClick={nextfn} 
          style={{ marginRight: "0.7rem" }}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  pageSize: 8,
  country: "us",
  category: "general"
};

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string
};

export default News;
