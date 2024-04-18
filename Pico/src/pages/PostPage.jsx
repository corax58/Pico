import React from 'react'

const PostPage = () => {
    const post={
        _id:'1',
        title:'post title',
        description:'post description',
        tags:['tag1','tag2'],
        imageUrls:[ 
             {
                imageUrl:'https://i.natgeofe.com/n/651e8fd7-8b58-4e79-85df-57dc7837a16c/main_image_star-forming_region_carina_nircam_final-5mb_3x4.jpg'
            },
             {
                imageUrl:'https://i.natgeofe.com/n/651e8fd7-8b58-4e79-85df-57dc7837a16c/main_image_star-forming_region_carina_nircam_final-5mb_3x4.jpg'
            },
             {
                imageUrl:'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'
            }, 
            {
                imageUrl:'https://st2.depositphotos.com/3320701/6791/i/450/depositphotos_67918751-stock-photo-rendering-of-a-futuristic-cyber.jpg'
            },
            
        ],
        postedBy:{
            userName:'dummyUserName',
            profile:'https://www.shutterstock.com/image-illustration/male-profile-picture-silhouette-avatar-260nw-149290403.jpg'
        }
    }


  return (
    <div>
        <div className="  h-96  carousel w-full">

  

  {
    post.imageUrls.map((image, index)=>(
        <div id={"slide"+(index)} className="carousel-item relative w-full bg-black">
    <img src={image.imageUrl} className=" h-full w-full object-scale-down" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href={index===0?("#slide"+(post.imageUrls.length-1)):("#slide"+(index-1))} className="btn btn-circle">❮</a> 
      <a href={index===post.imageUrls.length-1?("#slide0"):("#slide"+(index+1))} className="btn btn-circle">❯</a>
    </div>
  </div>
    ))
  }
  </div>
    </div>
  )
}

export default PostPage