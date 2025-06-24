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
      <section className="pink_container">
          <h1 className="heading">Pitch your startup, <br />Connect With Entrepreneurs</h1>
          <p className="sub-heading !max-w-3xl">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
          </p>
          <SearchForm query={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Results for "${query}"` : "All Startups"}
        </p>
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