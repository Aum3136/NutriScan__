interface Props {
  data: {
    foodName: string;
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  };
}

export default function NutritionCard({ data }: Props) {
  const dailyGoal = 2000;
  const percentage = (data.calories / dailyGoal) * 100;

  return (
    <div
      style={{
        marginTop: "25px",
        background: "rgba(255,255,255,0.2)",
        padding: "20px",
        borderRadius: "15px",
        textAlign: "left"
      }}
    >
      <h3>{data.foodName}</h3>

      <p>🔥 Calories: {data.calories} kcal</p>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <small>{percentage.toFixed(1)}% of daily 2000 kcal goal</small>

      <p>🥩 Protein: {data.protein} g</p>
      <p>🍞 Carbs: {data.carbs} g</p>
      <p>🧈 Fats: {data.fats} g</p>
    </div>
  );
}
