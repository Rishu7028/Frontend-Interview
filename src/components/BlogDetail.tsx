

import { useBlog } from '../lib/hooks/useBlogs'
import { Skeleton } from '../components/ui/skeleton'
import { Button } from '../components/ui/button'
import { ThumbsUp, MessageSquare } from 'lucide-react'
// import Image from 'next/image'
import { formatDate } from 'date-fns'

interface BlogDetailProps {
  blogId: number | null
}

export default function BlogDetail({ blogId }: BlogDetailProps) {
  const { data: blog, isLoading, error } = useBlog(blogId)

  if (!blogId) {
    return (
      <div className="flex h-full items-center justify-center text-gray-500">
        <p>Select a blog post to read</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-80 w-full" />
        <Skeleton className="h-8 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="flex items-center justify-center text-red-600">
        <p>Failed to load blog post</p>
      </div>
    )
  }

  return (
    <article className="space-y-8">
      {/* Cover Image */}
      <div className="relative h-96 w-full overflow-hidden rounded-2xl shadow-lg">
        <img
          src={blog.coverImage || "/placeholder.svg"}
          alt={blog.title}
          className="object-cover"
        />
      </div>

      {/* Meta Information */}
      <div className="space-y-6">
        {/* Category and Date */}
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-xs font-bold text-indigo-700 uppercase">
            {blog.category?.[0] || 'General'}
          </span>
          <span className="text-sm font-medium text-gray-500">
            {formatDate(new Date(blog.date), 'MMM dd, yyyy')}
          </span>
          <span className="text-sm font-medium text-gray-500">
            {Math.ceil(blog.content.split(' ').length / 200)} min read
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold leading-tight text-gray-900">
          {blog.title}
        </h1>

        {/* Share Button */}
        <Button
          className="gap-2 bg-indigo-600 text-white hover:bg-indigo-700"
        >
          <span>📤</span>
          Share Article
        </Button>
      </div>

      {/* Content Metadata */}
      <div className="grid grid-cols-3 gap-8 border-y border-gray-200 py-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Category</p>
          <p className="mt-2 text-sm font-semibold text-gray-900">
            {blog.category?.join(' & ')}
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Read Time</p>
          <p className="mt-2 text-sm font-semibold text-gray-900">
            {Math.ceil(blog.content.split(' ').length / 200)} mins
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Date</p>
          <p className="mt-2 text-sm font-semibold text-gray-900">
            {formatDate(new Date(blog.date), 'MMM dd, yyyy')}
          </p>
        </div>
      </div>

      {/* Description */}
      <div>
        <p className="text-lg leading-relaxed text-gray-700">
          {blog.description}
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-6 text-gray-800">
        {blog.content.split('\n\n').map((paragraph, idx) => {
          const isBulletList = paragraph.startsWith('•');
          if (isBulletList) {
            return (
              <ul key={idx} className="space-y-2 pl-4">
                {paragraph.split('\n').map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-base leading-relaxed">
                    <span className="flex-shrink-0 text-indigo-600">•</span>
                    <span>{bullet.replace(/^•\s?/, '')}</span>
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={idx} className="text-base leading-relaxed">
              {paragraph}
            </p>
          );
        })}
      </div>

      {/* Author Section */}
      <div className="flex gap-4 border-t border-gray-200 pt-8">
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-indigo-700 text-lg font-semibold text-white shadow-md">
          {blog.author?.charAt(0) || 'A'}
        </div>
        <div className="flex-grow">
          <p className="font-semibold text-gray-900">Written by {blog.author || 'Author'}</p>
          <p className="text-sm text-gray-500">{blog.authorTitle || 'Contributor'}</p>
        </div>
      </div>

      {/* Engagement */}
      <div className="flex gap-6 border-t border-gray-200 pt-6">
        <button className="flex items-center gap-2 text-gray-600 transition-colors hover:text-indigo-600">
          <ThumbsUp className="h-5 w-5" />
          <span className="text-sm font-medium">Like</span>
        </button>
        <button className="flex items-center gap-2 text-gray-600 transition-colors hover:text-indigo-600">
          <MessageSquare className="h-5 w-5" />
          <span className="text-sm font-medium">Comment</span>
        </button>
      </div>
    </article>
  )
}
