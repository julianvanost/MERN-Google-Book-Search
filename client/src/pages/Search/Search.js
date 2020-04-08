import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import SearchForm from '../../components/SearchForm'
import Results from '../../components/Results'
import ResultCard from '../../components/ResultCard'

const SearchPage = () => {

    return (
        <>
            <Navbar />
            <Header />
            <SearchForm />
            <Results>
            <ResultCard />
            </Results>
        </>
    )
}

export default SearchPage