import StatusCard from "../components/StatusCard";


export default function Home() {
  return (
     <div className="text-center">
      <h1 className="text-5xl mt-5">Home:</h1>
      <h3 className="mt-1">HTTP status responses as 7tv emotes</h3>
      <section className="container flex-row flex flex-wrap justify-center mx-auto my-24 ">
      <StatusCard/>
      </section>
    </div>
  )
}
