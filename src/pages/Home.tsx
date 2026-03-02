import ImageUploader from "../components/ImageUploader.tsx";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

<button onClick={() => navigate("/quiz")}>
  Take Stress Quiz
</button>
export default function Home() {
  return (
    <div>
      <h2>Upload Your Food Image</h2>
      <ImageUploader />
    </div>
  );
}
