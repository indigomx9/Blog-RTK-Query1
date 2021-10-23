import React from "react";
import { Link } from "react-router-dom";
import { PostAPI } from "../global/PostAPI";
import { Item } from "./Item";

export const List = () => {
    const { data: posts } = PostAPI.useGetPostsQuery();
    return (
        <React.Fragment>
            <h1>List</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos error vitae optio cum voluptatem repudiandae eligendi tempore expedita alias ratione ducimus atque ipsum quod, magni ea cupiditate provident impedit perspiciatis.</p>
        </React.Fragment>
    );
};





