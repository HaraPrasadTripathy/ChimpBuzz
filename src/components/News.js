import React, { Component } from 'react'
import NewsItem from './NewsItem'
import LoadingSpinner from './loadingSpinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    pageSize: 8,
    country: "us",
    category:"general"
  }

  static propTypes={
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
  }

  constructor(props){
    super(props);
    this.state={
      articles:[],
      page:1,
      totalResults: 0,
      loading: false
    }
    document.title=`ChimBuzz - ${this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)} News`;
  }

  
  updatefn= async()=>{
    const apiKey = process.env.REACT_APP_NEWS_API_KEY; 
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(url);
    console.log(data);
    let parsedata= await data.json();
    this.setState({
      articles: parsedata.articles, 
      totalResults: parsedata.totalResults,
      loading:false,
    });
  }

  async componentDidMount(){
   this.updatefn();
  }
  
  prevfn= async ()=>{
    this.setState({
      page: this.state.page-1
    },
    () => this.updatefn()
    );
  }
  
  nextfn= async ()=>{
    this.setState({
      page: this.state.page+1
    },
    () => this.updatefn());
  }


  render(){
    return (
      <div className="container1 mx-5">
        <h1 className='h1class'>
          {(this.props.category==="general")?"Today's top Headlines":`Today's top ${this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)} Headlines`}
        </h1>
        <div className='spinnerClass'>
        {this.state.loading && <LoadingSpinner/>}
        </div>
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
             <NewsItem title={element.title?element.title:""} description={element.description?element.description:""}  imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/>
            </div>
          })}
        </div>
        <div className='d-flex justify-content-between my-7'>
            <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.prevfn} style={{marginLeft:"0.7rem"}}>&larr; Previous</button>
            <button disabled={Math.ceil(this.state.totalResults/this.props.pageSize)<=this.state.page} type="button" className="btn btn-success" onClick={this.nextfn} style={{marginRight:"0.7rem"}}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
