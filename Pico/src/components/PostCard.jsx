import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({post}) => {
    // const post={
    //     _id:'1',
    //     title:'post title',
    //     description:'post description',
    //     tags:['tag1','tag2'],
    //     imageUrls:[ 
    //          {
    //             imageUrl:'https://i.natgeofe.com/n/651e8fd7-8b58-4e79-85df-57dc7837a16c/main_image_star-forming_region_carina_nircam_final-5mb_3x4.jpg'
    //         },
    //          {
    //             imageUrl:'https://i.natgeofe.com/n/651e8fd7-8b58-4e79-85df-57dc7837a16c/main_image_star-forming_region_carina_nircam_final-5mb_3x4.jpg'
    //         },
    //          {
    //             imageUrl:'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'
    //         },
          
           
    //         {
    //             imageUrl:'https://st2.depositphotos.com/3320701/6791/i/450/depositphotos_67918751-stock-photo-rendering-of-a-futuristic-cyber.jpg'
    //         },
            
    //     ],
    //     postedBy:{
    //         userName:'dummyUserName',
    //         profile:'https://www.shutterstock.com/image-illustration/male-profile-picture-silhouette-avatar-260nw-149290403.jpg'
    //     }
    // }
  return (
    <Link to={`/post/${post._id}`} className='  break-inside-avoid '>
     <div className=' shadow-lg bg-slate-50 mb-5  w-60 h-max  hover:shadow-2xl rounded-3xl overflow-hidden  hover:scale-105 transition-all duration-200 '>
<div className=' h-max w-full bg-white pt-1 px-2'>
    {post.imageUrls.length<2 ?(
        <div className='h-full w-full rounded-2xl overflow-hidden  flex justify-center'>
            <img src={post.imageUrls[0].imageUrl} className='h-full rounded-2xl ' />

        </div>
    ):(
        <div className=' relative grid grid-rows-2 grid-flow-col gap-1 bg-white h-full overflow-hidden rounded-2xl group'>
            <img src={post.imageUrls[0].imageUrl} className={'h-full rounded-2xl   object-cover'+(post.imageUrls.length>2?' row-span-2':'') }/>
            <img src={post.imageUrls[1].imageUrl} className='h-full rounded-2xl  object-cover' />

            {
                post.imageUrls.length>3 && (
                      <div className=' absolute bg-black h-full rounded-2xl  w-full opacity-50 items-center justify-center scale-0 group-hover:scale-100'>
                <div className='flex items-center justify-center h-full '><p className='text-white text-5xl'>+{post.imageUrls.length-3} </p></div>
            </div> 
                )
            }
         



            {
                post.imageUrls.length>2 && (
                     <img src={post.imageUrls[2].imageUrl} className='h-full rounded-2xl object-cover ' />
                )
            }
           

        </div>
    )}
</div>
<div className='h-full w-full  pl-4  space-y-2 pb-2 pt-1 bg-white'>
<div className='flex  flex-col'>
    <p className='text-sm font-medium'>{post.title}</p>
    <div className='flex space-x-1'>
            {post.tags.slice(0,3).map(tag=> <p key={tag} className='text-blue-900 bg-blue-300 rounded-xl px-1 underline text-xs '>{tag}</p>)}

    </div>
</div>
<div className='flex space-x-2'><img src={"https://wallpapers.com/images/hd/random-pfp-with-sunglasses-and-hearts-9cjm5zicnjcogsa2.jpg"} alt="" className='h-8 w-8 rounded-full' />
<p className='mt-1 text-xs'>{post.postedBy.userName}</p>
    </div></div>
</div>

    </Link>
   
  )
}

export default PostCard