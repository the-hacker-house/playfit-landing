import "./App.css";
import appleLogo from "./assets/apple.png";
import collarClosed from "./assets/collar-closed.png";
import collarInsideDumbbell from "./assets/collar-inside-dumbbell.png";
import collarOpen from "./assets/collar-open.png";
import collarOutsideDumbbell from "./assets/collar-outside-dumbbell.png";
import dashboard from "./assets/dashboard.png";
import exerciseStats from "./assets/exercise-stats.png";
import googleLogo from "./assets/google.png";
import logo from "./assets/logo.png";
import analytics from "./assets/more-analytics.png";
import setComplete from "./assets/set-complete.png";
import weightMachine from "./assets/weight-machine.png";
import weightStackCloseup from "./assets/weight-stack-closeup.png";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <img src={logo} alt="Playfit Logo" height="32" />
            <button className="cta-button">Sold Out ›</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Turn Every Workout Into
            <br />
            An <span className="highlight">Epic</span> Quest
          </h1>
          <p className="hero-subtitle">
            Level Up Your Fitness With Gamified Training
          </p>
          <div className="app-buttons">
            <button className="app-store-button">
              <img src={appleLogo} alt="Apple" className="store-logo" />
              <div>
                <div className="download-text">Download on the</div>
                <div className="store-text">App Store</div>
              </div>
            </button>
            <button className="app-store-button play-store">
              <img src={googleLogo} alt="Google Play" className="store-logo" />
              <div>
                <div className="download-text">Get it on</div>
                <div className="store-text">Google Play</div>
              </div>
            </button>
          </div>
          <div className="hero-product-image">
            <img
              src={collarInsideDumbbell}
              alt="Playfit Smart Collar on Dumbbell"
            />
          </div>
        </div>
      </section>

      {/* Gamification Section */}
      <section className="notification-section">
        <div className="container">
          <div className="notification-demo">
            <div className="notification-card">
              <div className="notification-header">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 2L20 12L30 14L22 22L24 32L16 27L8 32L10 22L2 14L12 12L16 2Z"
                    fill="#FFD700"
                    stroke="#FFA500"
                    strokeWidth="2"
                  />
                </svg>
                <span className="notification-title">
                  🔥 7-Day Streak! Keep crushing it!
                </span>
                <span className="notification-time">8:15 AM</span>
              </div>
              <p className="notification-text">
                You've unlocked the "Week Warrior" badge! Complete 3 more days
                for the epic "Perfect 10" achievement. 🏆
              </p>
            </div>
            <div className="notification-content">
              <h2 className="section-title">
                Earn Rewards, Unlock Achievements
              </h2>
              <p className="section-description">
                Every rep counts toward your next level. Collect badges,
                complete daily quests, climb leaderboards, and compete with
                friends as you transform into the strongest version of yourself.
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
            Compete, <span className="highlight">Challenge,</span>
            <br />
            Conquer <span className="highlight">Together</span>
          </h2>
          <p className="mega-description">
            Join global challenges, compete on leaderboards, and battle friends
            in head-to-head workout duels. Turn your training into an adventure
            where every set brings you closer to victory and legendary status.
          </p>
        </div>
      </section>

      {/* Personalized Training Section */}
      <section className="training-section">
        <div className="container">
          <div className="training-content">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="week-header">Daily Quest</div>
                <div className="workout-card">
                  <span className="workout-badge">⚡ CHALLENGE</span>
                  <h3 className="workout-name">Champion's Gauntlet</h3>
                  <p className="workout-details">
                    45 min • Upper Body • +500 XP • 🏅 3 Badges
                  </p>
                </div>
              </div>
            </div>
            <div className="training-text">
              <h2 className="section-title">
                Quest-Based Workouts & Challenges
              </h2>
              <p className="section-description">
                Embark on epic fitness journeys with quest-based workouts.
                Complete daily missions, weekly challenges, and seasonal
                campaigns to earn massive XP bonuses, unlock exclusive badges,
                and climb to the top of the leaderboard.
              </p>
              <button className="cta-button">Sold Out ›</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="features-grid-section">
        <div className="container">
          <h2 className="section-title center">Level Up Your Game</h2>
          <p className="section-subtitle">
            Playfit transforms every workout into an epic adventure
            <br />
            with powerful gamification features that keep you
            <br />
            motivated and coming back for more:
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">�</div>
              <div className="feature-name">Achievement badges & trophies</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <div className="feature-name">XP & level progression system</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔥</div>
              <div className="feature-name">Daily streaks & bonus rewards</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <div className="feature-name">Quest-based workout missions</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <div className="feature-name">Global & friend leaderboards</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚔️</div>
              <div className="feature-name">
                Head-to-head workout challenges
              </div>
            </div>
          </div>

          <div className="strength-notification">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path
                d="M24 4L28 18L42 20L32 30L35 44L24 37L13 44L16 30L6 20L20 18L24 4Z"
                fill="#FFD700"
                stroke="#FFA500"
                strokeWidth="3"
              />
            </svg>
            <div>
              <h3 className="notification-title-dark">
                🎉 Achievement Unlocked: Iron Warrior!
              </h3>
              <p className="notification-text-dark">
                You've completed 100 perfect reps! Earned +1000 XP and the
                legendary Iron Warrior badge. 💪
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
                Track Your Progress & Climb the Ranks
              </h2>
              <p className="section-description">
                Watch your level rise as you complete workouts and challenges.
                Every rep earns XP, every milestone unlocks rewards. Compare
                your progress with friends and see who rules the leaderboard.
              </p>
              <button className="cta-button">Sold Out ›</button>
            </div>
            <div className="vbt-chart">
              <div className="chart-bar" style={{ height: "100%" }}>
                <span className="bar-label">
                  LVL
                  <br />
                  32
                </span>
              </div>
              <div className="chart-bar" style={{ height: "88%" }}>
                <span className="bar-label">
                  LVL
                  <br />
                  28
                </span>
              </div>
              <div className="chart-bar" style={{ height: "77%" }}>
                <span className="bar-label">
                  LVL
                  <br />
                  24
                </span>
              </div>
              <div className="chart-bar" style={{ height: "64%" }}>
                <span className="bar-label">
                  LVL
                  <br />
                  20
                </span>
              </div>
              <div className="chart-bar" style={{ height: "46%" }}>
                <span className="bar-label">
                  LVL
                  <br />
                  16
                </span>
              </div>
              <div className="chart-bar" style={{ height: "36%" }}>
                <span className="bar-label">
                  LVL
                  <br />
                  12
                </span>
              </div>
              <div className="chart-bar" style={{ height: "30%" }}>
                <span className="bar-label">
                  LVL
                  <br />8
                </span>
              </div>
              <div className="chart-bar" style={{ height: "24%" }}>
                <span className="bar-label">
                  LVL
                  <br />4
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
              <h3>Earn Epic Badges</h3>
              <p>
                Unlock exclusive achievement badges as you hit milestones. From
                "First Steps" to "Legendary Warrior" - collect them all and show
                off your progress to the community.
              </p>
            </div>
            <div className="plate-item">
              <img src={weightStackCloseup} alt="Weight Machine Attachment" />
              <h3>Join The Battle</h3>
              <p>
                Challenge friends to workout duels, join team competitions, and
                compete in seasonal tournaments for exclusive rewards and
                bragging rights.
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
              <h2 className="section-title">Build Your Fitness Empire</h2>
              <p className="section-description">
                Start as a novice and rise through the ranks to become a fitness
                legend. Complete themed workout campaigns, conquer boss-level
                challenges, and unlock new training zones as you prove your
                strength.
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
            Players <span className="highlight">Love</span> It
          </h2>
          <p className="section-subtitle">
            Join thousands of fitness gamers crushing their goals.
          </p>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <h3 className="review-title">
                The gamification is incredibly addicting!
              </h3>
              <p className="review-text">
                I never thought I'd be excited to wake up at 6am for a workout,
                but the daily quests and leaderboard have me hooked. Already
                level 28! 🔥
              </p>
            </div>
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <h3 className="review-title">
                Competing with friends changed everything!
              </h3>
              <p className="review-text">
                My buddies and I challenge each other constantly. The badges and
                achievements make every workout feel like a victory. I've never
                been this consistent before.
              </p>
            </div>
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <h3 className="review-title">It's like an RPG for fitness!</h3>
              <p className="review-text">
                Leveling up, unlocking achievements, completing quests - this is
                exactly what I needed to stay motivated. Already collected 47
                badges and I'm not stopping! 🏆
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
                Track Your <span className="highlight">XP</span>.
              </h2>
              <div className="phone-mockup-small">
                <div className="metrics-screen">
                  <h3 className="metric-header">Experience Points</h3>
                  <div className="metric-stat">
                    <span className="metric-value">15,420</span>
                    <span className="metric-label">TOTAL XP EARNED</span>
                  </div>
                  <div className="metric-exercises">
                    <div className="exercise-stat">
                      <span className="exercise-name">THIS WEEK</span>
                      <span className="exercise-value">
                        2,850 <span className="metric-unit">XP</span>
                      </span>
                    </div>
                    <div className="exercise-stat">
                      <span className="exercise-name">NEXT LEVEL</span>
                      <span className="exercise-value">
                        580 <span className="metric-unit">XP</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="metric-panel">
              <h2 className="panel-title">
                <span className="highlight">Badges</span> & achievements.
              </h2>
              <div className="phone-mockup-small">
                <div className="rep-counter-screen">
                  <div className="rep-display">
                    <span className="rep-number">37</span>
                    <span className="rep-total">/100</span>
                  </div>
                  <div className="exercise-info">
                    <span className="exercise-icon">💪</span>
                    <span className="exercise-name">
                      BADGES UNLOCKED
                      <br />
                      KEEP GOING!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="app-showcase-section">
        <div className="container">
          <div className="app-showcase-content">
            <div className="app-showcase-text">
              <h2 className="mega-title">
                Your Fitness
                <br />
                <span className="highlight">Adventure</span>
                <br />
                Awaits
              </h2>
              <p className="section-description">
                Transform every workout into an epic quest. Earn XP, unlock
                achievements, compete with friends, and dominate leaderboards -
                all while building the strongest version of yourself.
              </p>
              <div className="app-features-list">
                <div className="app-feature">
                  <span className="feature-check">🏆</span>
                  <span>100+ unique achievement badges to collect</span>
                </div>
                <div className="app-feature">
                  <span className="feature-check">⚡</span>
                  <span>Level up system with 50+ ranks to conquer</span>
                </div>
                <div className="app-feature">
                  <span className="feature-check">🔥</span>
                  <span>Daily streaks with massive bonus rewards</span>
                </div>
                <div className="app-feature">
                  <span className="feature-check">⚔️</span>
                  <span>Challenge friends and climb leaderboards</span>
                </div>
              </div>
            </div>
            <div className="app-showcase-images">
              <div className="app-screenshot">
                <img
                  src={dashboard}
                  alt="Playfit Dashboard - Welcome screen with workout stats"
                />
              </div>
              <div className="app-screenshot">
                <img
                  src={exerciseStats}
                  alt="Live exercise analysis with velocity tracking"
                />
              </div>
              <div className="app-screenshot">
                <img
                  src={setComplete}
                  alt="Set completion with performance breakdown"
                />
              </div>
              <div className="app-screenshot">
                <img src={analytics} alt="Workout analytics and insights" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Hero Section */}
      <section className="product-hero">
        <div className="container">
          <h2 className="mega-title center">
            Every Rep Earns XP,
            <br />
            Every <span className="highlight">Workout</span> Levels You Up
          </h2>
          <p className="product-description">
            The smart collar that turns your training into an epic adventure.
            <br />
            Track everything automatically while you focus on crushing your
            <br />
            quests, earning badges, and becoming a fitness legend.
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
              <img src={logo} alt="Playfit Logo" height="35" />
              <div className="footer-app">
                <h3>Get the Playfit app</h3>
                <div className="app-buttons">
                  <button className="app-store-button">
                    <img src={appleLogo} alt="Apple" className="store-logo" />
                    <div>
                      <div className="download-text">Download on the</div>
                      <div className="store-text">App Store</div>
                    </div>
                  </button>
                  <button className="app-store-button play-store">
                    <img
                      src={googleLogo}
                      alt="Google Play"
                      className="store-logo"
                    />
                    <div>
                      <div className="download-text">Get it on</div>
                      <div className="store-text">Google Play</div>
                    </div>
                  </button>
                </div>
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
