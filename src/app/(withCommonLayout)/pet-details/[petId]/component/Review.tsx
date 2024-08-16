// components/ReviewSection.tsx
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Stack } from '@mui/material';

interface Review {
  id: number;
  author: string;
  content: string;
}

const ReviewPage = ({ petId }: { petId: any }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = () => {
    if (reviewText.trim()) {
      setReviews([...reviews, { id: Date.now(), author: 'Anonymous', content: reviewText }]);
      setReviewText('');
    }
  };

  return (
    <Box sx={{ mt: 4, py: 2, borderTop: '1px solid #ddd' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Reviews</Typography>
      <Stack spacing={2}>
        <TextField
          label="Write a review"
          multiline
          rows={4}
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit Review
        </Button>
        {reviews.length > 0 && (
          <Box>
            {reviews.map((review) => (
              <Box key={review.id} sx={{ mb: 2, p: 2, border: '1px solid #ddd', borderRadius: 1 }}>
                <Typography variant="body1"><strong>{review.author}</strong></Typography>
                <Typography variant="body2">{review.content}</Typography>
              </Box>
            ))}
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default ReviewPage;
