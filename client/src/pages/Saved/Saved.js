import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Results from '../../components/Results'
import SavedResultCard from '../../components/SavedResultCard'

const SavedPage = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Results>
            <SavedResultCard />
            </Results>
        </>
    )
}

export default SavedPage