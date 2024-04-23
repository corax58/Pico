import PostCard from "@/components/PostCard"
import useFetchAllPosts from "@/hooks/useFetchAllPosts"

const HomePage = () => { 
const {data,isLoading}=useFetchAllPosts()

console.log(data)

if(isLoading) return <h1>Loading...</h1>
  return (
    <div className="   space-y-5  justify-evenly      columns-6 p-5 ">
    
 {
  data.map((post)=> <PostCard key={post._id} post={post}/>)
 }

    </div>
  )
}





export default HomePage