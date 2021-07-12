import * as React from "react"
import Layout from "../components/Layout";
import Cta from "../components/Cta";
import ImageSlider from "../components/ImageSlider";
import Clients from "../components/Clients";


const IndexPage = () => {
  return (
      <Layout>
          <Cta/>
          <ImageSlider/>
          <Clients/>
      </Layout>
  )
}

export default IndexPage
