
import { useState } from "react";
import { TextField, Button, Stack, Rating, Typography } from "@mui/material";
import { useCreateReviewMutation } from "@/redux/api/reviewApi";
import useUserInfo from "@/hooks/userInfo";
import { toast } from "sonner";

const ReviewPage = ({ petId }: { petId: any }) => {
  const [reviewText, setReviewText] = useState("");
  const [createReview] = useCreateReviewMutation()
  const userInfo = useUserInfo();
  const [rating, setRating] = useState(0); 

  const handleSubmit = async () => {
    if (rating === 0 || !reviewText) {
      alert("Please provide both a rating and a comment.");
      return;
    }
    const reviewData = {
      rating,
      comment: reviewText,
      userId: userInfo.userId,
      petId
    };
    try {
      const response = await createReview(reviewData).unwrap();
      if (response) {
        toast("Review submitted successfully!");
        setRating(0); // Reset the rating
        setReviewText(""); // Reset the comment
      } else {
        toast("Failed to submit review.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Rate this Pet:</Typography>
      <Rating
        name="rating"
        value={rating}
        onChange={(event, newValue) => setRating(newValue as number)}
      />
      <TextField
        label="Write a review"
        multiline
        rows={4}
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        fullWidth
      />
      <Button disabled={!userInfo} variant="contained" color="primary" onClick={handleSubmit}>
        Submit Review
      </Button>
    </Stack>
  );
};

export default ReviewPage;
