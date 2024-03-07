import cookie from "../assets/cookie1.jpg";
import cookie7 from "../assets/cookie7.jpg";
import cookie1 from "../assets/cookie.jpg";
import cookie8 from "../assets/cookie8.jpg";

function Home() {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-section-div">
          <h5>Immediate Care</h5>
          <h1>Welcome Our Veterinary</h1>
          <p className="info">
            We are dedicated to providing compassionate care and exceptional
            service to you and your beloved pets. Our experienced team of
            veterinarians and staff are committed to ensuring the health and
            well-being of your furry friends. Whether it's routine vaccinations,
            medical check-ups, surgeries, or dental care, we're here to meet all
            your pet's needs. Trust us to provide the highest quality care for
            your cherished companions.
          </p>
          <div id="redirectBtn">
            <p className="alt-info">LEARN MORE</p>
          </div>
        </div>
        <div className="hero-section-img">
          <img src={cookie1} alt="cookie" />
        </div>
      </div>

      <div className="pet-connection">
        <h1>Connect with Your Pet</h1>
        <div className="pet-connection-innerDiv">
          <p>
            Stay connected with your furry friend through our latest pet
            telehealth updates and informative articles.
            <span>Discover More Pet Insights →</span>{" "}
          </p>
        </div>

        <div className="grid">
          <div className="grid-card">
            <img src={cookie8} alt="" />
            <div>
              <span>Pet Care</span>
              <h3>Tips for Keeping Your Cat Healthy</h3>
              <p>
                Learn how to maintain your cat's physical and mental health with
                our comprehensive guide. From regular vet check-ups to proper
                nutrition, we've got you covered.
              </p>

              <a>Explore →</a>
            </div>
          </div>
          <div className="grid-card">
            <img src={cookie} alt="" />
            <div>
              <span>Pet Wellness</span>
              <h3>Creating a Wellness Routine for Your Pet</h3>
              <p>
                Establish a routine that promotes your pet's overall well-being.
                From daily exercise to mental stimulation, find out how to keep
                your pet happy and healthy.
              </p>
              <a>Explore →</a>
            </div>
          </div>
          <div className="grid-card">
            <img src={cookie7} alt="" />
            <div>
              <span>Pet Nutrition</span>
              <h3>Essential Foods for Your Puppy</h3>
              <p>
                Discover the best foods to keep your puppy healthy and happy.
                From premium kibble to homemade treats, we'll help you make the
                right choices for your furry friend.
              </p>
              <a>Explore →</a>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="top-footer">
          <p>
            Veterinary medicine is a profession dedicated to protecting and
            improving the health of animals. Veterinarians diagnose, treat, and
            prevent health issues in both domestic and farm animals. They also
            provide guidance to pet owners on care and nutrition. Veterinary
            medicine is vital for both animal welfare and human health.
          </p>
        </div>
        <div className="bottom-footer">
          <div className="left-side">
            <h3>Contact</h3>

            <a href="mailto:example@example.com">Email</a>
            <a href="tel:+123456789">Phone</a>
            <a href="https://github.com/cgezginci">GitHub</a>
            <a href="https://www.linkedin.com/in/cantuggezginci/">LinkedIn</a>
          </div>
          <div className="right-side">
            <h3>Helpful Links</h3>
            <a>Services</a>
            <a>Support</a>
            <a>Terms & Conditions</a>
            <a>Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
