export default function Step3({ getValues, register, errors }) {
  const formData = getValues();

  const packageLabels = {
    frontend: "Frontend Developer (Rp 500.000)",
    backend: "Backend Developer (Rp 500.000)",
    fullstack: "Fullstack Developer (Rp 900.000)",
  };

  const sessionLabels = {
    pagi: "Sesi Pagi (09.00 - 12.00 WIB)",
    sore: "Sesi Sore (16.00 - 19.00 WIB)",
  };

  return (
    <div>
      <h3>Langkah 3: Konfirmasi & Persetujuan</h3>
      <hr />
      
      {/* Ringkasan Data */}
      <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
        <h4>Ringkasan Data Pendaftaran:</h4>
        <p><b>Nama Lengkap:</b> {formData.fullName}</p>
        <p><b>Email:</b> {formData.email}</p>
        <p><b>Nomor WhatsApp:</b> {formData.phone}</p>
        <p><b>Paket Belajar:</b> {packageLabels[formData.package]}</p>
        <p><b>Sesi Belajar:</b> {sessionLabels[formData.session]}</p>
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>
          <input
            type="checkbox"
            {...register("isAgreed", {
              required: "Anda harus menyetujui syarat dan ketentuan yang berlaku.",
            })}
          />
          Saya menyetujui seluruh syarat & ketentuan pendaftaran yang berlaku.
        </label>
        {errors.isAgreed && <p style={{ color: "red" }}>{errors.isAgreed.message}</p>}
      </div>
    </div>
  );
}