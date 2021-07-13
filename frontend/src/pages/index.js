import * as React from "react"
import Layout from "../components/Layout";
import Cta from "../components/Cta";
import ImageSlider from "../components/ImageSlider";
import Clients from "../components/Clients";
import Deliver from "../components/Deliver";
import Plans from "../components/Plans";


const IndexPage = () => {
  return (
      <Layout>
          <Cta/>
          <ImageSlider/>
          <Clients/>
          <Deliver/>
          <Plans/>
      </Layout>
  )
}

export default IndexPage
