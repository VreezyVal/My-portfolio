import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo'

const AboutPage = () => {
    return (
    <Layout>
        <Seo title="About" />
        <div>
        <h1>About Me</h1>
        <p>Welcome to the About page! I'm Valmy Dituluakidi, a passionate web developer...</p>
      </div>
    </Layout>
    )
}

export default AboutPage