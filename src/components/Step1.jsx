export default function Step1({ register, errors }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Langkah 1: Informasi Pribadi</h2>
      
      {/* Nama */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
        <input
          type="text"
          className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Masukkan nama lengkap"
          {...register("fullName", {
            required: "Nama lengkap wajib diisi.",
            minLength: { value: 3, message: "Nama lengkap minimal 3 karakter." },
          })}
        />
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email Aktif</label>
        <input
          type="email"
          className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="contoh@email.com"
          {...register("email", {
            required: "Email wajib diisi.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Format email tidak valid.",
            },
          })}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      {/* WhatsApp */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nomor WhatsApp</label>
        <input
          type="tel"
          className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="081234567890"
          {...register("phone", {
            required: "Nomor WhatsApp wajib diisi.",
            pattern: {
              value: /^[0-9]{10,13}$/,
              message: "Nomor WhatsApp harus berupa angka dan bernilai 10-13 digit.",
            },
          })}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>
    </div>
  );
}