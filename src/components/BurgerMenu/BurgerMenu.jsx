import { Link, useNavigate } from "react-router-dom";
import styles from "./BurgerMenu.module.css";
import linkedIn from "../../assets/LinkedInIcon.svg";
import x from "../../assets/XIcon.svg";
import instagram from "../../assets/InstagramIcon.svg";
import facebook from "../../assets/FacebookIcon.svg";
import PropTypes from "prop-types";
import telegram from "../../assets/TelegramIcon.svg";
import discord from "../../assets/DiscordIcon.svg";
import { useEffect, useState } from "react";
import { useNavigation } from "../../context/NavigationContext";

export default function BurgerMenu({ burgerOpen, setBurgerOpen }) {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(burgerOpen);
  const { loadSection } = useNavigation();

  useEffect(() => {
    if (burgerOpen) {
      setShowMenu(true); // Immediately show menu when burgerOpen is true
    } else {
      const timer = setTimeout(() => {
        setShowMenu(false); // Delay hiding the menu to allow animation to complete
      }, 300); // This duration should match your animation duration
      return () => clearTimeout(timer);
    }
  }, [burgerOpen]);

  const scrollToSection = (id) => {
    setBurgerOpen(false);
    if (id === "main") {
      // If navigating to the main page, simply scroll to the top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Navigate explicitly to the main page ("/") regardless of the current URL
    navigate("/");

    if (id !== "main") {
      // Append the hash to the URL and scroll to the desired section
      const url = new URL(window.location.href);
      url.hash = id;
      navigate(url.pathname + url.hash);

      // Scroll to the section after navigating to the main page
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offsetPosition = element.offsetTop;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100); // Adjust the delay if needed
    }
  };
  if (!showMenu) return null;

  function handleNavigate(id) {
    navigate("/");
    loadSection(id); // Load the section if not already loaded
    scrollToSection(id);
  }

  return (
    <div className={styles.burgerWrapper}>
      <div className={burgerOpen ? styles.burgerOpen : styles.burgerClosed}>
        <div className={styles.burgerInnerWrap}>
          <div className={styles.burgerClose}>
            <div
              className={`${styles.navIcon} ${burgerOpen && styles.open}`}
              onClick={() => setBurgerOpen(!burgerOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={styles.burgerContent}>
            {window.innerWidth < 1000 && (
              <>
                <div className={styles.burgerItem}>
                  <a onClick={() => navigate("/token")}>Token</a>
                </div>
                <div className={styles.burgerItem}>
                  <a onClick={() => handleNavigate("perks")}>Perks</a>
                </div>
                <div className={styles.burgerItem}>
                  <a onClick={() => handleNavigate("gto")}>GTO</a>
                </div>
              </>
            )}

            <div className={styles.burgerItem}>
              <a onClick={() => handleNavigate("keyFeatures")}>Key Features</a>
            </div>
            <div className={styles.burgerItem}>
              <a onClick={() => handleNavigate("howItWorks")}>How it works</a>
            </div>
            <div className={styles.burgerItem}>
              <a onClick={() => handleNavigate("phones")}>Train & Earn</a>
            </div>
            <div className={styles.burgerItem}>
              <a onClick={() => handleNavigate("roadmap")}>Roadmap</a>
            </div>
            <div className={styles.burgerItem}>
              <a onClick={() => navigate("/our-team")}>Our Team</a>
            </div>
            {window.innerWidth < 1000 && (
              <>
                <div className={styles.burgerItem}>
                  <a>Whitepaper</a>
                </div>
              </>
            )}
          </div>
          <div className={styles.burgerFooter}>
            <div className={styles.burgerFooterLink}>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
            <div className={styles.burgerFooterLink}>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </div>
            <div className={styles.socialIcons}>
              <Link
                to="https://www.linkedin.com/company/gymofficex/about/?viewAsMember=true"
                target="_blank"
              >
                <img
                  src={linkedIn}
                  alt=""
                  className={styles.linkedIn}
                  loading="lazy"
                />
              </Link>
              <Link to="https://twitter.com/_GymOffice" target="_blank">
                <img src={x} alt="" className={styles.twitter} loading="lazy" />
              </Link>
              <Link
                to="https://www.instagram.com/gymoffice.io/"
                target="_blank"
              >
                {" "}
                <img
                  src={instagram}
                  alt=""
                  className={styles.instagram}
                  loading="lazy"
                />
              </Link>
              <Link to="https://www.facebook.com/GymOffice.io" target="_blank">
                <img
                  src={facebook}
                  alt=""
                  className={styles.facebook}
                  loading="lazy"
                />
              </Link>
              <Link to="" target="_blank">
                <img
                  src={telegram}
                  alt=""
                  className={styles.telegram}
                  loading="lazy"
                />
              </Link>
              <Link to="" target="_blank">
                <img
                  src={discord}
                  alt=""
                  className={styles.discord}
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

BurgerMenu.propTypes = {
  burgerOpen: PropTypes.bool.isRequired,
  setBurgerOpen: PropTypes.func.isRequired,
};
