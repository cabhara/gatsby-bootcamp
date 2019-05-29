import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return(
        <Layout>
            <Head title="About" />
            <h1>About Me</h1>
            <p>Too much about me to write here.</p>
            <p><Link to="/contact">Want to contact me? Contact me.</Link></p>   
        </Layout>
    )
}

export default AboutPage