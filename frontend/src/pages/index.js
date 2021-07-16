import * as React from "react"
import Layout from "../components/Layout";
import Cta from "../components/Cta";
import ImageSlider from "../components/ImageSlider";
import Clients from "../components/Clients";
import Deliver from "../components/Deliver";
import Plans from "../components/Plans";
import Gallery from "../components/Gallery";
import Services from "../components/Services";


const IndexPage = () => {
  return (
      <Layout>
          <Cta/>
          <ImageSlider/>
          <Clients/>
          <Deliver/>
          <Plans/>
          <Gallery/>
          <Services/>
      </Layout>
  )
}

export default IndexPage
