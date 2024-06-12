'use client';

import apiRequests from "@/utils/ApiService";
//heart icon
import { IoHeartSharp } from "react-icons/io5";

interface FavoriteButtonProps {
    id: string;
    is_favorite: boolean;
    markFavorite: (is_favorite: boolean) => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
    id,
    is_favorite,
    markFavorite
}) => {
    const toggleFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        const response = await apiRequests.post(`/api/properties/${id}/toggle_favorite/`, {})
         markFavorite(response.is_favorited);
    }

    return (
        <div
            onClick={toggleFavorite}
            className={`absolute top-2 right-2 duration-200 ${is_favorite ? 'text-red-500' : 'text-white'} hover:text-red-500`}
        >
            <IoHeartSharp size={25} />

        </div>
    )
}

export default FavoriteButton;