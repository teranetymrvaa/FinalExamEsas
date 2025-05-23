import React from "react";
import "./style.css";
function Blogs() {
  return (
    <section className="blogs">
      <div className="container">
        <div className="products-content">
          <h1 className="product-h1">Our Blog</h1>
          <div className="blog-cards">
            <div className="blog-card">
              <img
                className="blog-img"
                src="https://preview.colorlib.com/theme/fashe/images/blog-01.jpg"
                alt=""
              />
              <p className="blog-title">
                Black Friday Guide: Best Sales & Discount Codes
              </p>
              <p className="blog-date">By Nancy Ward on July 22, 2017</p>
              <p className="blog-text">
                Duis ut velit gravida nibh bibendum commodo. Sus-pendisse
                pellentesque mattis augue id euismod. Inter-dum et malesuada
                fames
              </p>
            </div>


            <div className="blog-card">
              <img
                className="blog-img"
                src="https://preview.colorlib.com/theme/fashe/images/blog-03.jpg"
                alt=""
              />
              <p className="blog-title">
                New York SS 2018 Street Style: Annina Mislin
              </p>
              <p className="blog-date">By Nancy Ward on July 22, 2017</p>
              <p className="blog-text">
                Duis ut velit gravida nibh bibendum commodo. Sus-pendisse
                pellentesque mattis augue id euismod. Inter-dum et malesuada
                fames
              </p>
            </div>
            <div className="blog-card">
              <img
                className="blog-img"
                src="https://preview.colorlib.com/theme/fashe/images/blog-02.jpg"
                alt=""
              />
              <p className="blog-title">
                The White Sneakers Nearly Every Fashion Girls Own
              </p>
              <p className="blog-date">By Nancy Ward on July 22, 2017</p>
              <p className="blog-text">
                Duis ut velit gravida nibh bibendum commodo. Sus-pendisse
                pellentesque mattis augue id euismod. Inter-dum et malesuada
                fames
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
