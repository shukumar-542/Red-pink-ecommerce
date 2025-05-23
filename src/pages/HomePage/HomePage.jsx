import HeroSection from '../../component/HeroSection/HeroSection'
import PopularProduct from '../../component/PopularProduct/PopularProduct'
import Categories from '../../component/Categories/Categories'
import SpecialOffers from '../../component/SpecialOffers/SpecialOffers'
import FromCleaners from '../../component/FromCleaners/FromCleaners'
import FromMoisturizer from '../../component/FromMoisturizer/FromMoisturizer'
import FromSerum from '../../component/FromSerum/FromSerum'
import FromSunScreen from '../../component/FromSunScreen/FromSunScreen'
import FromToner from '../../component/FromToner/FromToner'
import BrandCaurosel from '../../component/BrandCaurosel/BrandCaurosel'

const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <Categories/>
        <PopularProduct/>
        <SpecialOffers/>
        <FromCleaners/>
      <FromMoisturizer/>
      <FromSerum/>
      <FromSunScreen/>
      <FromToner/>
      <BrandCaurosel/>
    </div>
  )
}

export default HomePage