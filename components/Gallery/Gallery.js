import React from 'react'
import ImageGallery from 'react-image-gallery'
export default function Gallery({photos}) {

    const gallerie = photos.map(photo => {
        if(photo.formats && photo.formats.thumbnail){
            return {original:photo.url ,
                 thumbnail: photo.formats.thumbnail.url ,
                 originalAlt: photo.name,
                 thumbnailALt: photo.name,
                 originalTitle:photo.name,
                 thumbnailTitle:photo.name
                }
        }else{
            return {original: photo.url , 
                thumbnail: photo.url ,
                originalAlt: photo.name,
                thumbnailALt: photo.name,
                originalTitle:photo.name,
                thumbnailTitle:photo.name
            }
        }
    })
    return (
        <ImageGallery lazyLoad={true} items={gallerie} />
    )
}
