import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import la from "../../images/la.jpg";
import SocialIcons from "../../components/SocialIcons";

const Landing = ({ name, tagline }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    la: {
      position: "absolute",
      top:"0",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "100%",
      right: "0",
      width: "100%"
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="landing" style={styles.landing}>
      <div className="textContainer" style={styles.textContainer}>
        <motion.h1
          className="name"
          style={styles.name}
          ref={ref}
          initial={{ y: "-10vw", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: "-10vw", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {name}
        </motion.h1>
        <motion.p
          className="description"
          ref={ref}
          initial={{ y: "10vw", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {tagline}
        </motion.p>
      </div>
      <div className="image-container">
        <motion.img
          className="la"
          ref={ref}
          initial={{ y: "10vw", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 0.4 } : { y: "10vw", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={styles.la}
          src={la}
          alt=""
        />
      </div>

      <SocialIcons />
    </section>
  );
};

export default Landing;
