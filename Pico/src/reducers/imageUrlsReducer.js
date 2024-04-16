const imageUrlsReducer = (imageUrls, action)=>{
switch (action.type) {
    case 'ADD_IMAGE_URL':
        return [...imageUrls, action.imageUrl]
    case 'REMOVE_IMAGE_URL':
        return imageUrls.filter(url => url !== action.imageUrl)
    case 'CLEAR_IMAGE_URLS':
        return []
    default:
        return imageUrls
    
}
}

export default imageUrlsReducer;