'use client'

import { useBlogs } from '../lib/hooks/useBlogs'
import { Skeleton } from '../components/ui/skeleton'
import {type  BlogPost } from '../lib/api-client'
import { formatDistanceToNow } from 'date-fns'

interface BlogListProps {
  selectedBlogId: number | null
  onSelectBlog: (id: number) => void
}

export default function BlogList({ selectedBlogId, onSelectBlog }: BlogListProps) {
  const { data: blogs, isLoading, error } = useBlogs()

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-24" />
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-sm text-red-600">
        Failed to load blogs. Please try again.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {blogs?.map((blog: BlogPost) => (
          <div
            key={blog.id}
            onClick={() => onSelectBlog(Number(blog.id))}
            className={`group cursor-pointer rounded-xl border-l-4 p-5 transition-all duration-200 ${
              selectedBlogId === blog.id
                ? 'border-l-indigo-600 bg-indigo-50 shadow-md'
                : 'border-l-gray-300 bg-white hover:border-l-indigo-400 hover:shadow-md'
            }`}
          >
            {/* Category and Date */}
            <div className="mb-3 flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-bold text-indigo-700 uppercase">
                {blog.category?.[0] || 'General'}
              </span>
              <span className="text-xs text-gray-500">
                {formatDistanceToNow(new Date(blog.date), { addSuffix: true })}
              </span>
            </div>

            {/* Title */}
            <h3 className="mb-2 line-clamp-2 text-sm font-bold text-gray-900 group-hover:text-indigo-600">
              {blog.title}
            </h3>

            {/* Description */}
            <p className="line-clamp-2 text-xs text-gray-600">
              {blog.description}
            </p>

            {/* Tag */}
            <div className="mt-4">
              <span className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                {blog.category?.[1] || 'Read More'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
