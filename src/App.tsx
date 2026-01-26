import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import BlogList from './components/BlogList'
import BlogDetail from './components/BlogDetail'

export default function Page() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null)

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="border-b border-gray-200 bg-white py-16 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
          CA Monk Blog
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
          Stay updated with the latest trends in finance, accounting, and career growth
        </p>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Latest Articles</h2>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Left Panel - Blog List */}
            <div className="space-y-6 lg:col-span-1">
              <BlogList
                selectedBlogId={selectedBlogId}
                onSelectBlog={setSelectedBlogId}
              />
            </div>

            {/* Right Panel - Blog Detail */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <BlogDetail blogId={selectedBlogId} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
