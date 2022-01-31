import BannerContinet from "../../components/bannerContinent/BannerContinet"
import Cities from "../../components/cities/Cities"
import Header from "../../components/header/Header"
import InformationContinet from "../../components/informationContinet/InformationContinet"

export const Continent = () => {

    return (
        <>
          <Header />  
          <BannerContinet />
          <InformationContinet />
          <Cities />
        </>
    )    
}

export default Continent