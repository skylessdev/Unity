import jar from '../assets/unity-jar.jpeg'

export default function HeroSection() {
  return (
    <section className="text-center p-10 bg-gradient-to-b from-zinc-100 to-white">
      <img src={jar} alt="UNITY Jar" className="mx-auto w-64 rounded-xl shadow-md" />
      <h1 className="text-4xl font-semibold mt-6">Premium Cannabis,<br />Designed for the Moment.</h1>
      <div className="mt-4 space-x-4">
        <button className="px-4 py-2 border border-black">SHOP NOW</button>
        <button className="px-4 py-2 border border-black">BUILD YOUR BOX</button>
      </div>
    </section>
  )
}
