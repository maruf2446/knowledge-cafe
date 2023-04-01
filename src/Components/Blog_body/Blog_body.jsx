import React from 'react';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import './Blog_body.css';



const Blog_body = (props) => {
   const { Blog_cover_image, Author_Name, Author_image, Blog_title, Publish_date, Read_time } = props.blog;
   const handleBookMark = props.handleBookMark;
   const timeCount = props.timeCount;

   return (
      <div className='blog-content'>
         <img src={Blog_cover_image} alt="" />

         <div className='content-copyright'>
            <div className="content">
               <div className="author-bio">
                  <img src={Author_image} alt="" />

                  <div className='author-details'>
                     <h3>{Author_Name}</h3>
                     <span>{Publish_date}</span>
                  </div>
               </div>

               <div className="blog-button">
                  <h4>{Read_time} min read</h4>
                  <span onClick={() => handleBookMark(props.blog)} className='cursor'>
                     <BsBookmarkCheckFill></BsBookmarkCheckFill>
                  </span>
               </div>

            </div>
            <h1>{Blog_title}</h1>
            <p>#beginners #programming</p>
            <a href="#javascript" onClick={() => timeCount(props.blog)}>Mark as read</a>
         </div>
      </div>
   );
};

export default Blog_body;