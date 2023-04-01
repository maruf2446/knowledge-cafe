import React from 'react';
import './BlogBookMark.css';

const BlogBookMark = ({anotherCart}) => {
    // console.log(anotherCart)

    let bookmarkCount = 0;
    for(const bookmark of anotherCart){
        bookmarkCount = bookmarkCount + (bookmark.quantity || 1 );
    }

    return (
        <div>
            <p>Bookmarked Blogs : {bookmarkCount}</p>
        </div>
    );
};
import './BlogBookMark.css';

export default BlogBookMark;