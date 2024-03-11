updatefn= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd1d2efcc2104b679828354d8f2da5f9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(url);
    let parsedata= await data.json();
    this.setState({
      articles: parsedata.articles, 
      totalResults: parsedata.totalResults,
      loading:false
    });
  }




  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd1d2efcc2104b679828354d8f2da5f9&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(url);
    let parsedata= await data.json();
    this.setState({
      articles: parsedata.articles, 
      totalResults: parsedata.totalResults,
      loading:false
    });
  }
  
  prevfn= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd1d2efcc2104b679828354d8f2da5f9&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(url);
    let parsedata= await data.json();
    this.setState({
      page: this.state.page-1,
      articles: parsedata.articles,
      loading:false
    })
  }
  
  nextfn= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd1d2efcc2104b679828354d8f2da5f9&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(url);
    let parsedata= await data.json();
    this.setState({
      page: this.state.page+1,
      articles: parsedata.articles,
      loading:false
    })
  }
