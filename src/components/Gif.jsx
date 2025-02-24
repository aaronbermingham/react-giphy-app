import React from 'react';

export const Gif = ({ gif }) => {
    return (
        <img
            src={gif.images.original.url}
            alt={gif.title}
            width={"200px"}
            height={"200px"}
        />
    )   
};