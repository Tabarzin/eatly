import st from "./review.module.css";
import React, { useCallback, useEffect } from "react";
import Text from "../../atoms/Text/Text";
import ReviewCard from "../../molecules/ReviewCard/ReviewCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, CommentsState } from "../../../store/commentsSlice";
import { AppDispatch, RootState } from "../../../store/store";
import useEmblaCarousel from "embla-carousel-react";

const Review: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { comments, status, error } = useSelector<RootState, CommentsState>(
    (state) => state.comments
  );
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const step = 3;

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      const currentIndex = emblaApi.selectedScrollSnap();
      const targetIndex = Math.max(currentIndex - step, 0);
      emblaApi.scrollTo(targetIndex);
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      const currentIndex = emblaApi.selectedScrollSnap();
      const targetIndex = Math.min(
        currentIndex + step,
        emblaApi.scrollSnapList().length - 1
      );
      emblaApi.scrollTo(targetIndex);
    }
  }, [emblaApi]);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const first6Comments = comments.slice(0, 6);
  return (
    <section className={st.review}>
      <Text className={st.h3} type={"h3"}>
        <span className={st.highlight}>Customer</span> Say
      </Text>
      <div className={st.comments_block}>
        <div className={st.embla} ref={emblaRef}>
          <div className={st.embla__container}>
            {first6Comments.map((comment) => (
              <div className={st.embla__slide} key={comment.id}>
                <ReviewCard
                  reviewerName={`@${comment.user.username}`}
                  commentary={comment.body}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={st.embla_btns}>
          <button className={st.dot} onClick={scrollPrev}></button>
          <button className={st.dot} onClick={scrollNext}></button>
        </div>
      </div>
    </section>
  );
};

export default Review;
