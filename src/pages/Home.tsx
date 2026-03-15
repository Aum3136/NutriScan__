<<<<<<< HEAD
import ImageUploader from "../components/ImageUploader.tsx";

export default function Home() {
  return (
    <div>
      <h2>Upload Your Food Image</h2>
      <ImageUploader />
    </div>
  );
}
=======
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
>>>>>>> 2fedf1225b8706ec18ec4092c20830a7a23d80db
