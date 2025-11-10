import { useState } from 'react'

const programs = [
  {
    key: 'Kelompok Bermain',
    title: 'Kelompok Bermain',
    desc: 'Pembelajaran berbasis bermain untuk stimulasi motorik, bahasa, sosial-emosi, dan kemandirian.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    key: 'TK',
    title: 'Taman Kanak-Kanak',
    desc: 'Fokus pada karakter Islami, literasi awal, numerasi dasar, sains sederhana, dan seni kreatif.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    key: 'SD',
    title: 'Sekolah Dasar',
    desc: 'Kurikulum terpadu dengan penguatan tauhid, adab, tahfidz, sains, teknologi, dan kolaborasi.',
    color: 'from-amber-500 to-orange-500',
  },
]

function App() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    program: 'Kelompok Bermain',
    birthdate: '',
    address: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)
    try {
      const res = await fetch(`${backend}/api/registrations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Gagal mengirim pendaftaran')
      const data = await res.json()
      setStatus({ type: 'success', message: 'Pendaftaran terkirim! Kami akan menghubungi Anda segera.' })
      // reset form
      setForm({ full_name: '', email: '', phone: '', program: 'Kelompok Bermain', birthdate: '', address: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Terjadi kesalahan. Coba lagi.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white text-gray-800">
      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-emerald-500 to-blue-500 grid place-items-center text-white font-bold group-hover:scale-105 transition-transform">BW</div>
            <div>
              <p className="font-semibold leading-tight">SIT Birrul Walidayn</p>
              <p className="text-xs text-slate-500 -mt-0.5">Berilmu • Beradab • Berdaya</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#program" className="hover:text-emerald-600">Program</a>
            <a href="#keunggulan" className="hover:text-emerald-600">Keunggulan</a>
            <a href="#daftar" className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 shadow">Daftar</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 bg-emerald-200/40 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-24 h-72 w-72 bg-sky-200/40 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs border border-emerald-100 mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Penerimaan Peserta Didik Baru 2025/2026
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              Sekolah Islam Terpadu
              <span className="block bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">Birrul Walidayn</span>
            </h1>
            <p className="mt-5 text-slate-600 text-lg">
              Membangun generasi Qurani yang cerdas, beradab, dan berdaya melalui kurikulum terpadu dan lingkungan yang penuh kasih.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#daftar" className="px-5 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 shadow">Daftar Sekarang</a>
              <a href="#program" className="px-5 py-3 rounded-lg border border-slate-200 hover:border-slate-300">Lihat Program</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-100 via-sky-100 to-white p-1 shadow-lg">
              <div className="h-full w-full rounded-2xl bg-white p-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-emerald-600 font-semibold">Tahfidz</p>
                    <p className="text-sm text-slate-600 mt-1">Metode menyenangkan</p>
                  </div>
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-sky-600 text-transparent bg-clip-text">30 Juz</div>
                </div>
                <div className="rounded-xl bg-sky-50 border border-sky-100 p-4">
                  <p className="text-xs text-sky-600 font-semibold">Adab & Karakter</p>
                  <p className="text-sm text-slate-600 mt-1">Pembiasaan harian</p>
                </div>
                <div className="rounded-xl bg-amber-50 border border-amber-100 p-4">
                  <p className="text-xs text-amber-600 font-semibold">STEM</p>
                  <p className="text-sm text-slate-600 mt-1">Sains dan teknologi</p>
                </div>
                <div className="rounded-xl bg-purple-50 border border-purple-100 p-4">
                  <p className="text-xs text-purple-600 font-semibold">Kreasi & Seni</p>
                  <p className="text-sm text-slate-600 mt-1">Eksplorasi bakat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section id="keunggulan" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">Mengapa Memilih Kami?</h2>
          <p className="text-center text-slate-600 mt-3 max-w-2xl mx-auto">Kolaborasi kurikulum nasional dengan nilai-nilai Islam dalam lingkungan aman dan menyenangkan.</p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Pembinaan Akhlak', desc: 'Adab dan karakter menjadi fondasi utama setiap aktivitas.' },
              { title: 'Tahfidz Qur’an', desc: 'Target hafalan bertahap dengan muroja’ah terstruktur.' },
              { title: 'Guru Berkualitas', desc: 'Pendidik berpengalaman dan penuh kasih.' },
              { title: 'Fasilitas Nyaman', desc: 'Kelas kondusif, area bermain, perpustakaan, dan mushalla.' },
            ].map((f, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900">{f.title}</h3>
                <p className="text-slate-600 mt-2 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program */}
      <section id="program" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">Program Pendidikan</h2>
          <p className="text-center text-slate-600 mt-3 max-w-2xl mx-auto">Pilih jenjang yang sesuai untuk putra/putri Anda.</p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div key={p.key} className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-xl transition-all">
                <div className={`h-32 bg-gradient-to-r ${p.color}`} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                  <p className="text-slate-600 mt-2 text-sm">{p.desc}</p>
                  <a href="#daftar" onClick={() => setForm((f)=>({...f, program: p.key}))} className="inline-block mt-5 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Daftar ke {p.title}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Pendaftaran */}
      <section id="daftar" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Form Pendaftaran</h2>
              <p className="text-slate-600 mt-3">Isi data di bawah ini untuk mendaftarkan putra/putri Anda. Tim kami akan menghubungi untuk proses selanjutnya.</p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span> Biaya pendaftaran dapat dibayarkan setelah konfirmasi.</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span> Kuota terbatas setiap jenjang.</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span> Informasi lebih lanjut akan dikirim ke nomor kontak.</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              {status && (
                <div className={`mb-4 p-3 rounded-lg text-sm ${status.type==='success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>{status.message}</div>
              )}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">Nama Lengkap</label>
                  <input name="full_name" value={form.full_name} onChange={handleChange} required placeholder="Nama lengkap anak" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email (opsional)</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@orangtua.com" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">No. HP Orang Tua</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required placeholder="08xxxxxxxxxx" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Program</label>
                  <select name="program" value={form.program} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    {programs.map(p => (
                      <option key={p.key} value={p.key}>{p.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Tanggal Lahir</label>
                  <input type="date" name="birthdate" value={form.birthdate} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">Alamat</label>
                  <input name="address" value={form.address} onChange={handleChange} placeholder="Alamat lengkap" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">Catatan</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Catatan tambahan" rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>
              <button disabled={submitting} type="submit" className="mt-4 w-full px-5 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed">
                {submitting ? 'Mengirim...' : 'Kirim Pendaftaran'}
              </button>
              <p className="text-xs text-slate-500 mt-3">Dengan mengirim data, Anda menyetujui kebijakan privasi sekolah.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} SIT Birrul Walidayn. All rights reserved.</p>
          <div className="text-sm text-slate-600">Kontak: 08xx-xxxx-xxxx • email@sekolah.sch.id</div>
        </div>
      </footer>
    </div>
  )
}

export default App
