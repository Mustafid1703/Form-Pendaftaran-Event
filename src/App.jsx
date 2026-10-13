import { useState } from "react";
import { useForm } from "react-hook-form";
import Indicator from "./components/Indicator";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

export default function App() {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      package: "",
      session: "",
      isAgreed: false,
    },
  });

  const handleNext = async () => {
    let isValid = false;
    if (step === 1) {
      isValid = await trigger(["fullName", "email", "phone"]);
    } else if (step === 2) {
      isValid = await trigger(["package", "session"]);
    }

    // Hanya pindah halaman, tidak memicu submit/alert
    if (isValid) setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = (data) => {
    alert("Pendaftaran Berhasil!\nData: " + JSON.stringify(data, null, 2));
  };

  const buttonStyle = {
    padding: "8px 16px",
    cursor: "pointer",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#f0f0f0",
  };

  const submitButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h2>Form Pendaftaran Event</h2>
      <Indicator currentStep={step} />

      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && <Step1 register={register} errors={errors} />}
        {step === 2 && <Step2 register={register} errors={errors} />}
        {step === 3 && (
          <Step3 getValues={getValues} register={register} errors={errors} />
        )}

        <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
          {step > 1 ? (
            <button type="button" onClick={handlePrev} style={buttonStyle}>
              Kembali
            </button>
          ) : (
            <div /> /* Element kosong agar posisi tombol Lanjut tetap di kanan */
          )}

          {step < 3 ? (
            <button type="button" onClick={handleNext} style={buttonStyle}>
              Lanjut
            </button>
          ) : (
            <button type="submit" style={submitButtonStyle}>
              Kirim Pendaftaran
            </button>
          )}
        </div>
      </form>
    </div>
  );
}