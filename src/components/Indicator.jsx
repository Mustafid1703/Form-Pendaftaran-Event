export default function Indicator({ currentStep }) {
  return (
    <div style={{ marginBottom: "20px", fontWeight: "bold" }}>
      Langkah {currentStep} dari 3
    </div>
  );
}