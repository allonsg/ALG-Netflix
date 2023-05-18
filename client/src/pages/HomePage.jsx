import HeroSlide from "../components/common/HeroSlide";
import tmdbConfigs from "../api/config/tmdb.configs";
const HomePage = () => {
  return (
    <>
      <HeroSlide
        mediaType={tmdbConfigs.mediaType.movie}
        mediaCategory={tmdbConfigs.mediaCategory.popular}
      />
    </>
  );
};

export default HomePage;
