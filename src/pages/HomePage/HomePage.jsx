import HeroSection from '../../component/HeroSection/HeroSection'
import PopularProduct from '../../component/PopularProduct/PopularProduct'
import Categories from '../../component/Categories/Categories'
import SpecialOffers from '../../component/SpecialOffers/SpecialOffers'

const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <Categories/>
        <PopularProduct/>
        <SpecialOffers/>

    </div>
  )
}

export default HomePage