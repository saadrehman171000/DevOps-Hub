"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export default function TestimonialForm() {
  const [form, setForm] = useState({ role: '', company: '', content: '', rating: 5 })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        console.log('Form submitted successfully');
        toast.success('Thank you for your feedback!');
        setForm({ role: '', company: '', content: '', rating: 5 }); // Reset form
        window.location.reload();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mt-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Share Your Success Story</h2>
      <p className="mb-4">Has DevOps transformed your workflow? We'd love to hear about it!</p>
      <div className="max-w-md mx-auto space-y-4">
        <Input
          placeholder="Your Role"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        />
        <Input
          placeholder="Company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />
        <Textarea
          placeholder="Share your experience..."
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <Input
          type="number"
          min="1"
          max="5"
          placeholder="Rating (1-5)"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
        />
        <Button 
          onClick={handleSubmit} 
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Your Testimonial'}
        </Button>
        <Button onClick={() => toast.success('Test toast!')}>Test Toast</Button>
      </div>
    </div>
  )
} 