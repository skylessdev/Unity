import product from '../assets/unity-jar.jpeg'

export default function ProductHighlight() {
  return (
    <section className="p-10 bg-zinc-50">
      <h2 className="text-2xl font-semibold mb-4">PREMIUM FLOWER</h2>
      <p className="mb-2">Whole bud. Whole vibe.</p>
      <p className="mb-2 font-bold">THC-Rich.<br />Earthy. Euphoric.</p>
      <p className="mb-4">From solo sessions to shared stories.</p>
      <img src={product} alt="UNITY GSC Jar" className="w-48 rounded" />
      <button className="mt-4 px-4 py-2 border border-black">START BUILDING</button>
    </section>
  )
}
