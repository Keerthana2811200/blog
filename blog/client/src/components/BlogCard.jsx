import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'moment'

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog/${blog._id}`}>
      <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 cursor-pointer'>
        <img
          src={blog.image}
          alt={blog.title}
          className='rounded-lg mb-4 w-full h-40 object-cover'
        />
        <div className='text-sm text-primary mb-1'>
          {Moment(blog.createdAt).format('MMMM Do YYYY')}
        </div>
        <h2 className='text-lg font-semibold text-gray-800'>{blog.title}</h2>
        <p className='text-gray-500 text-sm mt-1 truncate'>{blog.subTitle}</p>
      </div>
    </Link>
  )
}

export default BlogCard
