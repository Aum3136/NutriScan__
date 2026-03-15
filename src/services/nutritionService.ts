export const analyzeFood = async () => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        foodName: "Grilled Chicken Salad",
        calories: 320,
        protein: 35,
        carbs: 18,
        fats: 12,
      });
    }, 1500);
  });
};
