import React, { useState } from 'react';
import { AllMovies,Loading, Error, Pagination } from '.';
import {useSearchByNameApiQuery} from '../services/searchByName';
const AllMoviesBySearch = ({currentTextC}) => {
    console.log(currentTextC);
    const [page, setPage] = useState(1)
    const {data, isFetching} = useSearchByNameApiQuery({name: currentTextC, page });
    
    console.log(data);
    let MoviesData = data;

    const changepage = (type)=>{
        switch (type){
            case 'p1':
                setPage(1)
                break;
            case 'p2':
                if(page > 1){
                    setPage(page - 1)
                }
                break;
            case 'p4':
                if(page < data.total_pages){
                    setPage(page + 1)
                }
                break;
            case 'p5':
                if(data.total_pages > 1000){
                    setPage(1000)
                }
                else{
                    setPage(data.total_pages)
                }
                break;
                default:
                break;
        }
    }

    if(isFetching){
        return <Loading/>
    }
    else if(!data){
        return <Error/>
    }
    else{
        return (
            <>
        <AllMovies MoviesData={{...MoviesData, type: 'byname'}}/>
        <Pagination page={page} changepage={changepage}/>
            </>
        )
    }
};

export default AllMoviesBySearch;
