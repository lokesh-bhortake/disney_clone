import { HiPlus } from "react-icons/hi";
import { HiHome, HiMagnifyingGlass, HiPlayCircle, HiStar, HiTv } from "react-icons/hi2";
import disney from './../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import nationalG from './../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import starwar from './../assets/images/starwar.png'
 
import starwarV from './../assets/videos/star_warsV.mp4'
import disneyV from './../assets/videos/disneyV.mp4'
import marvelV from './../assets/videos/marvelV.mp4'
import nationalGeographicV from './../assets/videos/national_geographicV.mp4'
import pixarV from './../assets/videos/pixarV.mp4'


export const menu = [
    {
        name:'HOME',
        icon: HiHome,
    },
    {
        name:'SEARCH',
        icon: HiMagnifyingGlass,
    },
    {
        name:'WATCH LIST',
        icon: HiPlus,
    },
    {
        name:'ORIGINALS',
        icon: HiStar,
    },
    {
        name:'MOVIES',
        icon: HiPlayCircle,
    },    
    {
        name:'SERIES',
        icon: HiTv,
    },
]

export const genere= [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
]

export const productionHouseList=[
    {
        id:1,
        image:disney,
        video:disneyV
    },
    {
        id:2,
        image:pixar,
        video:pixarV
    },
    {
        id:3,
        image:marvel,
        video:marvelV
    },
    {
        id:4,
        image:starwar,
        video:starwarV
    },
    {
        id:5,
        image:nationalG,
        video:nationalGeographicV
    },

]
