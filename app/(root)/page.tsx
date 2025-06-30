import SearchForm from "../../components/SearchForm"
import StartupCard, { StartupCardType } from "../../components/StartupCard"
import { getAllPosts } from "@/sanity/lib/queries"
import { sanityFetch, SanityLive } from "@/sanity/lib/live"
import { auth } from "@/auth"
import ParticlesHome from "@/components/particles/ParticlesHome"
import SectionDivider from "@/components/SectionDivider"
import { MotionH1 } from "@/components/motionComponents/MotionH1"
import { MotionP } from "@/components/motionComponents/MotionP"
import { MotionDiv } from "@/components/motionComponents/MotionDiv"


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
      <section className="jumbo relative">
          <ParticlesHome />
          <MotionH1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading"
          >
            <span className="heading-main">Pitch your</span> <span className="heading-highlight">startup</span>
          </MotionH1>
          <MotionP
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="sub-heading !max-w-3xl"
          >
            Connect with entrepreneurs, showcase groundbreaking ideas, and transform concepts into reality through our exclusive startup ecosystem.
          </MotionP>
          <div className="grid grid-cols-1 text-white gap-3 my-5 md:grid-cols-3">
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="heading-card"
            >
              <h2 className="text-4xl font-extrabold">
                500+
              </h2>
              <p>Active Startups</p>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="heading-card"
            >
              <h2 className="text-4xl font-extrabold">
                10K+
              </h2>
              <p>Entrepreneurs</p>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="heading-card"
            >
              <h2 className="text-4xl font-extrabold">
                $2M+
              </h2>
              <p>Funding Raised</p>
            </MotionDiv>
          </div>
          <SectionDivider/>
      </section>
      

      <section className="section_container bg-red">
        <div className="flex flex-col items-center gap-5 ">
          <h2 className="heading-main text-4xl md:text-5xl font-bold pb-1">Startup Directory</h2>
          <SearchForm query={query}/>
          <p className="text-white/60 text-1xl md:text-xl">
            {query ? `Results for "${query}"` : "All Startups"}
          </p>
        </div>
        
        
        <ul className="mt-7 card_grid max-w-7xl mx-auto ">
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