import React from 'react'
import { useEffect,useState } from 'react'
import instance from './baseUrl'
import './Banner.css';

function Banner({fetchUrl}) {
    const [movies,setMovies]=useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"
    //function to call api 
    async function getData(){
        const outData=await instance.get(fetchUrl)
        setMovies(outData.data.results[
            Math.floor(Math.random()*outData.data.results.length-1)
        ])
    }
    useEffect(()=>{
    getData()
    },[])

// console.log(movies);  // checking if the data come or not

// to limit the content size
function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+".....":str
}
  return (
    <div className='banner' 
        style={{backgroundImage:`url(${base_url}${movies?.backdrop_path})`,
        backgroundSize:"Cover",
        backgroundPosition:"center"}} >
        <div className='bannerContent'>
            <h1 className='title'>{movies?.original_name}</h1>
            <h3 className='desc'>{truncate(movies?.overview,220)}</h3>
        </div>
    </div>
  )
}

export default Banner
