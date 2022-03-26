import React from 'react';
import BlogCard from './BlogCard';

const blogs = [
  {
    name: 'Dev Community',
    link: 'https://dev.to/jeffreythecoder',
    imgSrc: 'dev.png',
  },
  {
    name: 'Medium',
    link: 'https://jeffreyzepengyu.medium.com/',
    imgSrc: 'medium.webp',
  },
];

function BlogCards({ isDetailed }) {
  return (
    <>
      {blogs.map(({ name, link, imgSrc }, idx) => {
        return (
          <BlogCard
            name={name}
            link={link}
            imgSrc={imgSrc}
            key={idx}
            isDetailed={isDetailed}
          />
        );
      })}
    </>
  );
}

export default BlogCards;
