'use client';

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Trash2 } from 'lucide-react';

interface DeleteButtonProps {
  testimonialId: string;
  userId: string;
  currentUserId: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ testimonialId, userId, currentUserId }) => {
  if (userId !== currentUserId) return null;

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      const response = await fetch('/api/testimonials', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: testimonialId }),
      });

      if (response.ok) {
        toast.success('Testimonial deleted successfully');
        window.location.reload();
      } else {
        toast.error('Failed to delete testimonial');
      }
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleDelete}>
      <Trash2 className="h-4 w-4" />
    </Button>
  );
};

export default DeleteButton;