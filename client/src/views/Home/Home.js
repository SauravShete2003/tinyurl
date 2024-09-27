import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="home__container">
          <h1 className="home__title">Discover the Best with Us!</h1>
          <p className="home__description">
            Explore a world of creativity, inspiration, and endless possibilities.
            Let us guide you on an amazing journey through the art of modern home design.
          </p>
          <button className="auth-btn">Get Started</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
