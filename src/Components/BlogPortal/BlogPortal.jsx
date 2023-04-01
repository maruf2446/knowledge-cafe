import React, { useEffect, useState } from 'react';
import Blog_body from '../Blog_body/Blog_body';
import Sidebar from '../Sidebar/Sidebar';
import { addDb, getElememtsItem } from '../Utilities/Utility';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BlogPortal.css';
import Timer from '../Timer/Timer';
import BlogBookMark from '../BlogBookMark/BlogBookMark';

const BlogPortal = () => {
    const [blogBody, setBlogBody] = useState([]);
    const [cart, setCart] = useState([]);
    const [timer, setTimer] = useState([]);

    const timeCount = (times) => {
        const timeSet = [...timer, times];
        setTimer(timeSet);
    }

    const handleBookMark = (blog) => {
        const selectBlog = cart.find(selectCart => selectCart.id === blog.id);
        if (selectBlog) {
            toast.warn("Already added");
            return;
        }
        const newCart = [...cart, blog];
        setCart(newCart)
        addDb(blog.blog_code);
    }

    useEffect(() => {
        fetch("Books.json")
            .then(res => res.json())
            .then(data => setBlogBody(data))
    }, []);

    useEffect(() => {
        const getData = getElememtsItem();
        const saveBlog = [];

        for (const id in getData) {
            const NewBlogData = blogBody.find(blogs => blogs.blog_code === id)
            if (NewBlogData) {
                const quantity = getData[id];
                NewBlogData.quantity = quantity;
                saveBlog.push(NewBlogData);
            }
        }
        setCart(saveBlog);
    }, [blogBody]);


    return (
        <div className="body-section">
            <div className='body-container'>

                <div className="body-div">
                    {
                        blogBody.map((blog) => <Blog_body
                            blog={blog}
                            key={blog.id}
                            handleBookMark={handleBookMark}
                            timeCount={timeCount}
                        ></Blog_body>)
                    }
                </div>

                <div className="sidebar-div">
                    <div className="time-section">
                        <Timer timer={timer}></Timer>
                    </div>

                    <div className="new-blogAdd">
                        <BlogBookMark anotherCart={cart}></BlogBookMark>
                        {
                            cart.map((carts, index) => <Sidebar
                                carts={carts}
                                key={index}
                            ></Sidebar>)
                        }
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BlogPortal;