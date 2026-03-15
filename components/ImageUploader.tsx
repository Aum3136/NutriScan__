import { useState } from "react";
import { analyzeFood } from "../services/nutritionService";
import NutritionCard from "./NutritionCard";

export default function ImageUploader() {
  const [image, setImage] = useState<File | null>(null);
  const [nutrition, setNutrition] = useState<any>(null);
  const [loading, setLoading] = useState(false);
const [history, setHistory] = useState<any[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      setNutrition(null);
    }
  };

  const handleAnalyze = async () => {
  setLoading(true);
  const result = await analyzeFood();
  setNutrition(result);
  setHistory((prev) => [result, ...prev]);
  setLoading(false);
};

  return (
    <div>
      <label className="upload-box">
        📸 Click to Upload Food Image
        <input type="file" hidden onChange={handleImageChange} />
      </label>

      {image && (
        <div>
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="preview-img"
          />
          <br />
          <button onClick={handleAnalyze}>Analyze Food</button>
        </div>
      )}

{loading && <div className="spinner"></div>}

      {nutrition && <NutritionCard data={nutrition} />}
      {history.length > 0 && (
  <div style={{ marginTop: "30px", textAlign: "left" }}>
    <h3>📜 Scan History</h3>
    {history.map((item, index) => (
      <div
        key={index}
        style={{
          background: "rgba(255,255,255,0.15)",
          padding: "10px",
          borderRadius: "10px",
          marginBottom: "10px"
        }}
      >
        {item.foodName} - {item.calories} kcal
      </div>
    ))}
  </div>
)}

    </div>
  );
}
