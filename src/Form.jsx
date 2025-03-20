import { useState } from "react";

const FormPendaftaran = ({ setData }) => {
  const [form, setForm] = useState({
    mode: "accepted",
    year: "2025",
    nisn: "",
    noreg: "",
    name: "",
    univ: "",
    jenjang: "",
    prodi: "",
    link: "",
    date: "",
    sch: "",
    kabKot: "",
    nameKabKot: "",
    prov: "",
  });

  function randomize(prefixes, maxLength) {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = Math.floor(Math.random() * 100000);
    const randomNumber = `${prefix}${suffix.toString().padStart(maxLength, "0")}`;
    return randomNumber;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    let data = {
      ...form,
      date: new Intl.DateTimeFormat("id-ID", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date(form.date)),
    };
    setData(data);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Fake SNBP Generator
      </h2>
      <p className="text-sm text-center text-gray-800 mb-4">
        <span className="text-red-700">Disclaimer: </span>Mohon untuk tidak
        menggunakan ini sebagai bukti semestinya. Gunakan untuk hiburan saja!
      </p>
      <ul class="ml-6 list-disc">
        <li class="text-sm/1.5 text-gray-800 mb-4"><a class="font-semibold underline text-blue-500" href="https://sidata-ptn-snpmb.bppp.kemdikbud.go.id">Daftar Universitas & Prodi</a></li>
        <li class="text-sm/1.5 text-gray-800 mb-4"><a class="font-semibold underline text-blue-500" href="https://id.wikipedia.org/wiki/Daftar_kabupaten_dan_kota_di_Indonesia_menurut_provinsi">Daftar Daerah</a> atau sesuaikan dengan daerah kalian</li>
      </ul>

      {/* Mode */}
      <div className="mb-4">
        <label className="block text-gray-700">Mode:</label>
        <select
          required
          name="mode"
          value={form.mode}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="accepted">Lulus / Biru</option>
          <option value="rejected">Tidak Lulus / Merah</option>
        </select>
        <span className="text-xs mt-1">
          Pilih mode apakah ingin lulus atau tidak lulus.
        </span>
      </div>

      {/* Tahun */}
      <div className="mb-4">
        <label className="block text-gray-700">Tahun:</label>
        <input
          required
          name="year"
          type="text"
          inputMode="numeric"
          value={form.year}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <span className="text-xs mt-1">Masukkan tahun yang dituju.</span>
      </div>

      {/* NISN */}
      <div className="mb-4">
        <label className="block text-gray-700">NISN:</label>
        <div className="flex gap-2">
          <input
            required
            name="nisn"
            type="text"
            inputMode="numeric"
            value={form.nisn}
            onChange={handleChange}
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={() =>
              setForm({
                ...form,
                nisn: randomize(["005", "006", "007", "008"], 7),
              })
            }
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Randomize
          </button>
        </div>
        <span className="text-xs mt-1">
          Masukkan NISN-mu, atau gunakan pengacak.
        </span>
      </div>

      {/* Nomor Registrasi */}
      <div className="mb-4">
        <label className="block text-gray-700">Nomor Registrasi:</label>
        <div className="flex gap-2">
          <input
            required
            name="noreg"
            type="text"
            inputMode="numeric"
            value={form.noreg}
            onChange={handleChange}
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={() =>
              setForm({
                ...form,
                noreg: randomize(["423", "424"], 6),
              })
            }
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Randomize
          </button>
        </div>
        <span className="text-xs mt-1">
          Masukkan Nomor Registrasimu, atau gunakan pengacak.
        </span>
      </div>

      {/* Nama */}
      <div className="mb-4">
        <label className="block text-gray-700">Namamu:</label>
        <input
          required
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="GALIH PUJI IRIANTO"
        />
        <span className="text-xs mt-1">
          Masukkan namamu. Biasanya mengandung uppercase (capslock).
        </span>
      </div>

      {/* Kampus */}
      <div className="mb-4">
        <label className="block text-gray-700">Nama Kampus:</label>
        <input
          required
          name="univ"
          type="text"
          value={form.univ}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Universitas Indonesia"
        />
        <span className="text-xs mt-1">
          Masukkan Universitas yang dituju dengan format kapital di awal kata.
          Tuliskan nama asli, bukan singkatan.
        </span>
      </div>

      {/* Program Studi */}
      <div className="mb-4">
        <label className="block text-gray-700">Program Studi:</label>
        <div className="flex gap-2">
          <select
            required
            name="jenjang"
            value={form.jenjang}
            onChange={handleChange}
            className="w-1/3 p-2 border rounded"
          >
            <option>Select</option>
            <option value="S1">S1</option>
            <option value="S2">S2</option>
            <option value="S3">S3</option>
            <option value="D1">D1</option>
            <option value="D2">D2</option>
            <option value="D3">D3</option>
            <option value="D4">D4</option>
          </select>
          <input
            required
            name="prodi"
            type="text"
            value={form.prodi}
            onChange={handleChange}
            className="flex-1 p-2 border rounded"
            placeholder="Pendidikan Matematika"
          />
        </div>
        <span className="text-xs mt-1">
          Masukkan Program Studi yang diinginkan dengan format kapital di awal
          kata.
        </span>
      </div>

      {/* Link Penerimaan Kampus */}
      <div className="mb-4">
        <label className="block text-gray-700">Link Penerimaan Kampus:</label>
        <div className="flex gap-2">
          <input
            required
            name="link"
            type="text"
            inputMode="url"
            value={form.link}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="https://penerimaan.kampus.ac.id"
          />
          <button
            onClick={() =>
              setForm({
                ...form,
                link: "https://penerimaan.ui.ac.id",
              })
            }
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Link
          </button>
        </div>
        <span className="text-xs mt-1">
          Masukkan link penerimaan resmi. Secara umum, kamu bisa menggunakan
          tombol "Link" lalu mengubah singkatan dari Universitasmu.
        </span>
      </div>

      {/* Tanggal Lahir */}
      <div className="mb-4">
        <label className="block text-gray-700">Tanggal Lahir:</label>
        <input
          required
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="01/01/2000"
        />
        <span className="text-xs mt-1">Masukkan Tanggal Lahirmu.</span>
      </div>

      {/* Asal Sekolah */}
      <div className="mb-4">
        <label className="block text-gray-700">Asal Sekolah:</label>
        <input
          required
          name="sch"
          type="text"
          value={form.sch}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="SMAN 1 Gubug"
        />
        <span className="text-xs mt-1">
          Masukkan Asal Sekolahmu dengan format kapital di awal kata.
        </span>
      </div>

      {/* Tempat Tinggal */}
      <div className="mb-4">
        <label className="block text-gray-700">Tempat Tinggal:</label>
        <div className="flex gap-2">
          <select
            required
            name="kabKot"
            value={form.kabKot}
            onChange={handleChange}
            className="w-1/3 p-2 border rounded"
          >
            <option>Select</option>
            <option value="Kab.">Kabupaten</option>
            <option value="Kota">Kota</option>
          </select>
          <input
            required
            name="nameKabKot"
            type="text"
            value={form.nameKabKot}
            onChange={handleChange}
            className="flex-1 p-2 border rounded"
            placeholder="Semarang"
          />
        </div>
        <span className="text-xs mt-1">
          Pilih Kabupaten atau Kota, lalu masukkan nama daerahmu dengan format
          kapital di awal kata.
        </span>
      </div>

      {/* Provinsi */}
      <div className="mb-4">
        <label className="block text-gray-700">Provinsi:</label>
        <input
          required
          name="prov"
          type="text"
          value={form.prov}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Jawa Tengah"
        />
        <span className="text-xs mt-1">
          Masukkan nama provinsimu dengan format kapital di awal kata.
        </span>
      </div>

      {/* Tombol Submit */}
      <button
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <p className="text-sm text-center text-gray-800 mt-6">
        Built with 🛌 by{" "}
        <a
          className="font-semibold underline text-blue-500"
          href="https://instagram.com/graphiert"
          target="_blank"
        >
          {" "}
          @graphiert
        </a>{" "}
        |{" "}
        <a
          className="font-semibold underline text-blue-500"
          href="https://tako.id/graphiert"
          target="_blank"
        >
          Donate me! (ID ONLY)
        </a>
      </p>
    </div>
  );
};

export default FormPendaftaran;
