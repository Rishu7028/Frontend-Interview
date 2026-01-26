'use client'

import { Button } from '../components/ui/button'
import { useState } from 'react'
import CreateBlogModal from './CreateBlogModal'

export default function Header() {
  const [showCreateModal, setShowCreateModal] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 shadow-md">
              <span className="text-lg font-bold text-white">M</span>
            </div>
            <span className="text-lg font-bold text-gray-900">CA MONK</span>
          </div>

          {/* Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600">Tools</a>
            <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600">Practice</a>
            <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600">Events</a>
            <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600">Job Board</a>
            <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600">Points</a>
          </nav>

          {/* Action Button */}
          <Button
            onClick={() => setShowCreateModal(true)}
            className="bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Profile
          </Button>
        </div>
      </header>

      {showCreateModal && (
        <CreateBlogModal onClose={() => setShowCreateModal(false)} />
      )}
    </>
  )
}
