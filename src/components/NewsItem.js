import React from "react";

const NewsItem = ({ title, description, imgurl, newsurl, author, date }) => {
  return (
    <div className="container my-3 flex justify-center">
      <div
        className="card relative flex flex-col"
        style={{ height: "33rem" }}
      >
        <img
          src={
            !imgurl ? "https://wallpapercave.com/wp/wp3396930.jpg" : imgurl
          }
          className="card-img-top"
          alt="News"
          style={{ height: "13rem", objectFit: "cover" }}
        />
        <div
          className="card-body flex-1 overflow-y-auto"
          style={{ paddingBottom: "3rem" }}
        >
          <h2 className="card-title">{title}</h2>
          <p className="card-text my-3">{description}</p>
          <p
            className="card-text my-3"
            style={{ fontFamily: "Georgia, serif" }}
          >
            By {!author ? "unknown" : author} on{" "}
            {new Date(date).toGMTString()}
          </p>
        </div>
        <a
          href={newsurl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-primary absolute bottom-0 left-1 right-1"
          style={{
            margin: "1rem",
            textAlign: "center",
          }}
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
