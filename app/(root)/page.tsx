import SearchForm from "../../components/SearchForm"
import StartupCard, { StartupCardType } from "../../components/StartupCard"
import { getAllPosts } from "@/sanity/lib/queries"
import { sanityFetch, SanityLive } from "@/sanity/lib/live"
import { auth } from "@/auth"


// no tiene sentido que los searchParams sean un promise
export default async function Home({ searchParams }: 
  { searchParams: Promise<{ query?: string }> }) {
  
  const query = (await searchParams).query
  const params = { search: query || null }

  const session = await auth()
  console.log(session?.id)

  const { data: posts } = await sanityFetch({query: getAllPosts, params})

  return (
    <>
      <section className="jumbo">
          <h1 className="heading">
            <span className="heading-main">Pitch your</span> <span className="heading-highlight">startup</span>
          </h1>
          <p className="sub-heading !max-w-3xl">
            Connect with entrepreneurs, showcase groundbreaking ideas, and transform concepts into reality through our exclusive startup ecosystem.
          </p>
          <div className="grid grid-cols-1 text-white gap-3 my-5 md:grid-cols-3">
            <div className="heading-card">
              <h2 className="text-4xl font-extrabold">
                500+
              </h2>
              <p>Active Startups</p>
            </div>
            <div className="heading-card">
              <h2 className="text-4xl font-extrabold">
                10K+
              </h2>
              <p>Entrepreneurs</p>
            </div>
            <div className="heading-card">
              <h2 className="text-4xl font-extrabold">
                $2M+
              </h2>
              <p>Funding Raised</p>
            </div>
          </div>
      </section>
      <section className="section_container">

        <div className="flex flex-col items-center gap-5">
          <h2 className="heading-main text-4xl md:text-5xl font-bold pb-1">Startup Directory</h2>
          <SearchForm query={query}/>
          <p className="text-white/60 text-1xl md:text-xl">
            {query ? `Results for "${query}"` : "All Startups"}
          </p>
        </div>
        
        
        <ul className="mt-7 card_grid">
          {
            posts?.length > 0 ? posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            )) : (
              <p className="no-results">No results found</p>
            )
          }
        </ul>
      </section>
      <SanityLive />
    </>
  )
}