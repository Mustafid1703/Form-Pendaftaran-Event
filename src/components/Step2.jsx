export default function Step2({ register, errors }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Langkah 2: Pilihan Kursus & Jadwal</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Pilih Paket Belajar</label>
        <select
          className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
          {...register("package", { required: "Silakan pilih salah satu paket belajar." })}
        >
          <option value="">-- Pilih Paket --</option>
          <option value="frontend">Frontend Developer (Rp 500.000)</option>
          <option value="backend">Backend Developer (Rp 500.000)</option>
          <option value="fullstack">Fullstack Developer (Rp 900.000)</option>
        </select>
        {errors.package && <p className="text-red-500 text-xs mt-1">{errors.package.message}</p>}
      </div>

      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Pilih Sesi Belajar</label>
        <div className="space-y-2">
          <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              value="pagi"
              {...register("session", { required: "Pilih salah satu sesi belajar." })}
              className="w-4 h-4 text-blue-600"
            />
            <span className="text-sm">Sesi Pagi (09.00 - 12.00 WIB)</span>
          </label>
          <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              value="sore"
              {...register("session", { required: "Pilih salah satu sesi belajar." })}
              className="w-4 h-4 text-blue-600"
            />
            <span className="text-sm">Sesi Sore (16.00 - 19.00 WIB)</span>
          </label>
        </div>
        {errors.session && <p className="text-red-500 text-xs mt-1">{errors.session.message}</p>}
      </div>
    </div>
  );
}