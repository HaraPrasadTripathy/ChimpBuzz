import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imgurl,newsurl,author,date}=this.props;
    return (
      <div className='container my-3'>
        <div className="card" style={{height:"25"}}>
          <img src={!imgurl?"https://wallpapercave.com/wp/wp3396930.jpg":imgurl} className="card-img-top" alt="News"/>
          <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text my-3">{description}</p>
          <p className="card-text my-3" style={{fontFamily:"Georgia, serif"}}>By {!author?"unkown":author} on {new Date(date).toGMTString()}</p>
          <a href={newsurl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }

}
