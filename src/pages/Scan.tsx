import ImageUploader from "../components/ImageUploader";

export default function Scan() {
  return (
    <div style={{ padding: "60px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          Scan Your Meal 🍽
        </h1>
        <p style={{ color: "#94a3b8", marginBottom: "40px" }}>
          Upload your food image and get instant nutrition insights.
        </p>

        <div className="scan-card">
          <ImageUploader />
        </div>
      </div>
    </div>
  );
}
