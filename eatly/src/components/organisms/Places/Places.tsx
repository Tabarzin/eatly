import st from "./places.module.css";
import Text from "../../atoms/Text/Text";
import InfoCard from "../../molecules/InfoCard/InfoCard";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes, RecipesState } from "../../../store/recipesSlice";
import { RootState, AppDispatch } from "../../../store/store";

const Places: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { recipes, status, error } = useSelector<RootState, RecipesState>(
    (state) => state.recipes
  );

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const topThreeSnacks = recipes
    .slice()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={st.places}>
      <span className={st.h3}>
        <Text type={"h3"}>
          Our Top <span className={st.highlight}> Lunch</span>
        </Text>
      </span>
      <div className={st.infocardblock}>
        {topThreeSnacks.map((snack) => (
          <InfoCard
            key={snack.id}
            imageSrc={snack.image}
            mealType={snack.mealType[1]}
            title={snack.name}
            time={`${snack.prepTimeMinutes} min •`}
            rating={snack.rating.toString()}
            className={st.infocard_img}
          />
        ))}
      </div>
    </div>
  );
};

export default Places;
