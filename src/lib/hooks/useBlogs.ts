import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiClient, type CreateBlogPayload } from '../api-client';

export function useBlogs() {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: apiClient.getBlogs,
  });
}

export function useBlog(id: number | null) {
  return useQuery({
    queryKey: ['blog', id],
    queryFn: () => (id ? apiClient.getBlogById(id) : null),
    enabled: !!id,
  });
}

export function useCreateBlog() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateBlogPayload) => apiClient.createBlog(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });
}
