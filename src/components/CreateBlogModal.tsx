'use client'

import React from "react"

import { useState } from 'react'
import { useCreateBlog } from '../lib/hooks/useBlogs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'
// import { X } from 'lucide-react'

interface CreateBlogModalProps {
  onClose: () => void
}

export default function CreateBlogModal({ onClose }: CreateBlogModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    category: ['FINANCE'],
    description: '',
    content: '',
    coverImage: '',
  })

  const createMutation = useCreateBlog()

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFormData((prev) => ({
      ...prev,
      category: value.split(',').map((c) => c.trim()),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await createMutation.mutateAsync({
        ...formData,
        date: new Date().toISOString(),
      })
      onClose()
    } catch (error) {
      console.error('Failed to create blog:', error)
    }
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Blog Post</DialogTitle>
          <DialogDescription>
            Fill in the details to create a new blog post
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter blog title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category">Category (comma-separated)</Label>
            <Input
              id="category"
              name="category"
              placeholder="e.g., FINANCE, AI"
              value={formData.category.join(', ')}
              onChange={handleCategoryChange}
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Enter blog description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={3}
            />
          </div>

          {/* Cover Image URL */}
          <div className="space-y-2">
            <Label htmlFor="coverImage">Cover Image URL</Label>
            <Input
              id="coverImage"
              name="coverImage"
              placeholder="https://example.com/image.jpg"
              value={formData.coverImage}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="Enter blog content"
              value={formData.content}
              onChange={handleInputChange}
              required
              rows={6}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={createMutation.isPending}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-indigo-600 text-white hover:bg-indigo-700"
              disabled={createMutation.isPending}
            >
              {createMutation.isPending ? 'Creating...' : 'Create Blog'}
            </Button>
          </div>

          {createMutation.error && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
              Failed to create blog. Please try again.
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}
