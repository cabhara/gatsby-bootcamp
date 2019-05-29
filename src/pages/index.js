import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello.</h1>
            <h2>I'm Christina, a developer living in Arkansas.</h2>    
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>   
            <iframe width="560" height="315" src="https://www.youtube.com/embed/SJmRr-4_UQQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vcf3BcIbuUI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Layout>
    )
}

export default IndexPage
