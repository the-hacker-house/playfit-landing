import "./App.css";
import collarClosed from "./assets/collar-closed.png";
import collarInsideDumbbell from "./assets/collar-inside-dumbbell.png";
import collarOpen from "./assets/collar-open.png";
import collarOutsideDumbbell from "./assets/collar-outside-dumbbell.png";
import weightMachine from "./assets/weight-machine.png";
import weightStackCloseup from "./assets/weight-stack-closeup.png";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M8 8L16 20L8 32M24 8L32 20L24 32"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>PLAYFIT</span>
            </div>
            <button className="cta-button">Sold Out ›</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Discover Playfit
            <br />
            <span className="highlight">Smart</span> Collar
          </h1>
          <p className="hero-subtitle">
            The Future of Strength Training Is Here
          </p>
          <button className="app-store-button">
            <span className="apple-icon">🍎</span>
            <div>
              <div className="download-text">Download on the</div>
              <div className="store-text">App Store</div>
            </div>
          </button>
          <div className="hero-product-image">
            <img
              src={collarInsideDumbbell}
              alt="Playfit Smart Collar on Dumbbell"
            />
          </div>
        </div>
      </section>

      {/* Notification Section */}
      <section className="notification-section">
        <div className="container">
          <div className="notification-demo">
            <div className="notification-card">
              <div className="notification-header">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M6 6L12 16L6 26M20 6L26 16L20 26"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
                <span className="notification-title">
                  Keep your streak going
                </span>
                <span className="notification-time">8:15 AM</span>
              </div>
              <p className="notification-text">
                Morning! ⭐ We've got a fun workout for you today. Start your
                day right!
              </p>
            </div>
            <div className="notification-content">
              <h2 className="section-title">Smart coaching in your pocket</h2>
              <p className="section-description">
                Strength training is no longer optional, it's essential. Let
                Playfit's smart collar and coaching app guide you with
                personalized workouts that fit right into your busy schedule.
              </p>
              <button className="cta-button">Sold Out ›</button>
            </div>
          </div>
        </div>
      </section>

      {/* Weight Change Section */}
      <section className="feature-section dark">
        <div className="container">
          <div className="feature-split">
            <div className="feature-content">
              <h2 className="feature-title">
                <span className="highlight">Easy</span>
                <br />
                Installation
              </h2>
              <p className="feature-description">
                The hinged split-ring design makes installation effortless.
                Simply open the collar, clamp it onto any bar or handle, and
                secure it. The inner padding ensures a snug, secure fit on metal
                bars and rods.
              </p>
              <button className="cta-button">Sold Out ›</button>
            </div>
            <div className="feature-image">
              <img
                src={collarOpen}
                alt="Playfit Collar Open View - Hinged Design"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dumbbell Placement Section */}
      <section className="feature-section">
        <div className="container">
          <div className="feature-split reverse">
            <div className="feature-image">
              <img
                src={collarOutsideDumbbell}
                alt="Playfit Collar at Dumbbell End"
              />
            </div>
            <div className="feature-content">
              <h2 className="feature-title">
                <span className="highlight">Flexible</span>
                <br />
                Placement
              </h2>
              <p className="feature-description">
                Position the smart collar anywhere on your equipment - mid-bar
                or at the end. Works with Olympic bars, adjustable dumbbells,
                and standard barbells for maximum versatility.
              </p>
              <button className="cta-button">Sold Out ›</button>
            </div>
          </div>
        </div>
      </section>

      {/* Form Correction Section */}
      <section className="form-section">
        <div className="container">
          <h2 className="mega-title">
            Perfect <span className="highlight">Form,</span>
            <br />
            Every <span className="highlight">Rep</span>
          </h2>
          <p className="mega-description">
            Unsure of a move? Achieve flawless exercise form with Playfit's
            advanced motion sensors and AI-powered form tracking. Our smart
            collar provides real-time feedback and corrections, ensuring each
            movement is performed safely and effectively.
          </p>
        </div>
      </section>

      {/* Personalized Training Section */}
      <section className="training-section">
        <div className="container">
          <div className="training-content">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="week-header">This week</div>
                <div className="workout-card">
                  <span className="workout-badge">STRENGTH</span>
                  <h3 className="workout-name">This is Sparta</h3>
                  <p className="workout-details">
                    45 min • Upper Body • Intermediate
                  </p>
                </div>
              </div>
            </div>
            <div className="training-text">
              <h2 className="section-title">
                Personalized coaching & training
              </h2>
              <p className="section-description">
                Achieve your goals - across muscle gain, weight loss, and more -
                with Playfit's coaching app featuring personalized training
                plans designed specifically for your body and progress.
              </p>
              <button className="cta-button">Sold Out ›</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="features-grid-section">
        <div className="container">
          <h2 className="section-title center">Let Playfit do the work</h2>
          <p className="section-subtitle">
            Just attach the Playfit smart collar,
            <br />
            hit 'go' and experience intelligent training
            <br />
            with a range of features including:
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🏃</div>
              <div className="feature-name">Automatic rep tracking</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-name">Real-time form tracking</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <div className="feature-name">Exercise recognition</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚙️</div>
              <div className="feature-name">Smart weight recommendations</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">AI</div>
              <div className="feature-name">AI-powered coaching</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <div className="feature-name">
                Personalized analytics and insights
              </div>
            </div>
          </div>

          <div className="strength-notification">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path
                d="M10 10L20 24L10 38M28 10L38 24L28 38"
                stroke="black"
                strokeWidth="3"
              />
            </svg>
            <div>
              <h3 className="notification-title-dark">
                Strength increase detected!
              </h3>
              <p className="notification-text-dark">
                Your rep quality and velocity are trending upwards. Keep up the
                great work! 💪
              </p>
            </div>
            <span className="notification-time-dark">5:28 PM</span>
          </div>
        </div>
      </section>

      {/* VBT Section */}
      <section className="vbt-section">
        <div className="container">
          <div className="vbt-content">
            <div className="vbt-text">
              <h2 className="section-title">
                Progress effectively - and safely
              </h2>
              <p className="section-description">
                Playfit's state-of-the-art velocity-based training (VBT)
                analyzes the speed of your reps to determine exactly when you
                should increase or decrease the weight.
              </p>
              <button className="cta-button">Sold Out ›</button>
            </div>
            <div className="vbt-chart">
              <div className="chart-bar" style={{ height: "100%" }}>
                <span className="bar-label">
                  0.70
                  <br />
                  M/S
                </span>
              </div>
              <div className="chart-bar" style={{ height: "88%" }}>
                <span className="bar-label">
                  0.62
                  <br />
                  M/S
                </span>
              </div>
              <div className="chart-bar" style={{ height: "77%" }}>
                <span className="bar-label">
                  0.54
                  <br />
                  M/S
                </span>
              </div>
              <div className="chart-bar" style={{ height: "64%" }}>
                <span className="bar-label">
                  0.45
                  <br />
                  M/S
                </span>
              </div>
              <div className="chart-bar" style={{ height: "46%" }}>
                <span className="bar-label">
                  0.32
                  <br />
                  M/S
                </span>
              </div>
              <div className="chart-bar" style={{ height: "36%" }}>
                <span className="bar-label">
                  0.25
                  <br />
                  M/S
                </span>
              </div>
              <div className="chart-bar" style={{ height: "30%" }}>
                <span className="bar-label">
                  0.21
                  <br />
                  M/S
                </span>
              </div>
              <div className="chart-bar" style={{ height: "24%" }}>
                <span className="bar-label">
                  0.17
                  <br />
                  M/S
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weight Plate Showcase Section */}
      <section className="weight-plate-section">
        <div className="container">
          <div className="weight-plate-grid">
            <div className="plate-item">
              <img src={collarClosed} alt="Smart Collar Closed View" />
              <h3>Sleek Matte Black Design</h3>
              <p>
                Compact 2-3 inch cylinder with six screws securing the halves.
                Features embossed purple logo and top slot for
                button/LED/charging.
              </p>
            </div>
            <div className="plate-item">
              <img src={weightStackCloseup} alt="Weight Machine Attachment" />
              <h3>Weight Machine Compatible</h3>
              <p>
                Clamps directly onto guide rods of weight machines to
                automatically track resistance, reps, and tempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Equipment Section */}
      <section className="equipment-section">
        <div className="container">
          <div className="equipment-content">
            <div className="equipment-image">
              <img
                src={weightMachine}
                alt="Selectorized Strength Training Machine"
              />
            </div>
            <div className="equipment-text">
              <h2 className="section-title">Transform Cable Machines</h2>
              <p className="section-description">
                Works seamlessly with selectorized strength training machines
                like chest press and pec deck. Attach to guide rods to
                automatically track weight stack movement, resistance levels,
                and exercise tempo - no manual logging required.
              </p>
              <button className="cta-button">Sold Out ›</button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <h2 className="mega-title center">
            Customer <span className="highlight">Reviews</span>
          </h2>
          <p className="section-subtitle">
            See why people are calling this the future of fitness.
          </p>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <h3 className="review-title">
                They've delivered on everything promised!
              </h3>
              <p className="review-text">
                I was a bit nervous investing in something that came to me
                through an Instagram ad. I'm so glad I took the chance!
              </p>
            </div>
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <h3 className="review-title">
                Fantastic addition to our home gym!
              </h3>
              <p className="review-text">
                I received my Playfit collar about a week ago and absolutely
                love it! Seamless setup and easy to start workouts with all my
                existing equipment...
              </p>
            </div>
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <h3 className="review-title">Better than I expected!</h3>
              <p className="review-text">
                I was anxiously awaiting my Playfits since I first backed the
                project last year. When I finally received them, I was blown
                away by the quality and the feel of...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="metrics-section">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-panel">
              <h2 className="panel-title">
                Advanced <span className="highlight">metrics</span>.
              </h2>
              <div className="phone-mockup-small">
                <div className="metrics-screen">
                  <h3 className="metric-header">Volume</h3>
                  <div className="metric-stat">
                    <span className="metric-value">3080</span>
                    <span className="metric-label">TOTAL VOLUME</span>
                  </div>
                  <div className="metric-exercises">
                    <div className="exercise-stat">
                      <span className="exercise-name">BICEP CURLS</span>
                      <span className="exercise-value">
                        1100 <span className="metric-unit">lb</span>
                      </span>
                    </div>
                    <div className="exercise-stat">
                      <span className="exercise-name">DEADLIFTS</span>
                      <span className="exercise-value">
                        360 <span className="metric-unit">lb</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="metric-panel">
              <h2 className="panel-title">
                <span className="highlight">Automatic</span> rep counting.
              </h2>
              <div className="phone-mockup-small">
                <div className="rep-counter-screen">
                  <div className="rep-display">
                    <span className="rep-number">3</span>
                    <span className="rep-total">/10</span>
                  </div>
                  <div className="exercise-info">
                    <span className="exercise-icon">🏋️</span>
                    <span className="exercise-name">
                      DEADLIFTS
                      <br />
                      40 LBS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Hero Section */}
      <section className="product-hero">
        <div className="container">
          <h2 className="mega-title center">
            Playfit Gets Smarter
            <br />
            as <span className="highlight">You</span> Get Stronger
          </h2>
          <p className="product-description">
            The matte black smart collar features advanced motion sensors in a
            compact,
            <br />
            durable design. Six precision screws secure the two halves, while
            the hinged
            <br />
            split-ring with inner padding grips any bar securely for reliable
            tracking.
          </p>
          <div className="product-showcase">
            <img
              src={collarClosed}
              alt="Playfit Smart Collar - Closed View"
              className="product-main"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="logo">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M8 8L16 20L8 32M24 8L32 20L24 32"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
                <span>PLAYFIT</span>
              </div>
              <div className="footer-app">
                <h3>Get the Playfit app</h3>
                <button className="app-store-button">
                  <span className="apple-icon">🍎</span>
                  <div>
                    <div className="download-text">Download on the</div>
                    <div className="store-text">App Store</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="footer-links">
              <a href="#cancellations">Cancellations & Returns</a>
              <a href="#terms">Terms of Sale</a>
              <a href="#use">Terms of Use</a>
              <a href="#privacy">Privacy Policy</a>
            </div>
            <div className="footer-copyright">© 2024 Playfit, Inc.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
