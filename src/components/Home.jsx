import { useEffect, useRef } from "react";
import bigCloudOne from "../assets/clouds/bid_cloud_1.png";
import bigCloudTwo from "../assets/clouds/big_cloud_2.png";
import bigCloudThree from "../assets/clouds/big_cloud_3.png";
import midCloudOne from "../assets/clouds/mid_cloud_1.png";
import midCloudFour from "../assets/clouds/mid_cloud_4.png";
import smallCloudFour from "../assets/clouds/small_cloud_4.png";
import landblock from "../assets/landblock.png";
import stars from "../assets/stars.png";
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";
import "./Home.css";

const CELESTIAL_LOOP_MS = 120000;

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);

const smoothstep = (value) => {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
};

const cubicBezier = (t, start, controlOne, controlTwo, end) => {
  const inverse = 1 - t;
  return (
    inverse ** 3 * start +
    3 * inverse ** 2 * t * controlOne +
    3 * inverse * t ** 2 * controlTwo +
    t ** 3 * end
  );
};

const getArcPoint = (progress, points) => ({
  x: cubicBezier(
    progress,
    points.start.x,
    points.controlOne.x,
    points.controlTwo.x,
    points.end.x,
  ),
  y: cubicBezier(
    progress,
    points.start.y,
    points.controlOne.y,
    points.controlTwo.y,
    points.end.y,
  ),
});

const arcs = {
  sun: {
    start: { x: -7, y: 30 },
    controlOne: { x: 10, y: -2 },
    controlTwo: { x: 78, y: -1 },
    end: { x: 116, y: 48 },
  },
  moon: {
    start: { x: -7, y: 30 },
    controlOne: { x: 10, y: -2 },
    controlTwo: { x: 78, y: -1 },
    end: { x: 116, y: 48 },
  },
};

const setCelestialStyle = (element, point, opacity) => {
  if (!element) {
    return;
  }

  element.style.opacity = opacity.toFixed(3);
  element.style.transform = `translate3d(${point.x.toFixed(3)}vw, ${point.y.toFixed(3)}vh, 0)`;
};

function Home() {
  const sunRef = useRef(null);
  const moonRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const startTime = performance.now();

    const animateCelestialBodies = (currentTime) => {
      const loopProgress =
        ((currentTime - startTime) % CELESTIAL_LOOP_MS) / CELESTIAL_LOOP_MS;

      const sunProgress = smoothstep(loopProgress / 0.55);
      const moonProgress = smoothstep((loopProgress - 0.42) / 0.55);

      // const sunOpacity = 1 - smoothstep((loopProgress - 0.35) / 0.04);
      // const moonFadeIn = smoothstep((loopProgress - 0.42) / 0.05);
      // const moonFadeOut = 1 - smoothstep((loopProgress - 0.84) / 0.05);

      setCelestialStyle(
        sunRef.current,
        getArcPoint(sunProgress, arcs.sun),
        // clamp(sunOpacity),
        sunProgress * 70,
      );
      setCelestialStyle(
        moonRef.current,
        getArcPoint(moonProgress, arcs.moon),
        // clamp(moonFadeIn * moonFadeOut),
        moonProgress * 42,
      );

      animationFrameId = requestAnimationFrame(animateCelestialBodies);
    };

    animationFrameId = requestAnimationFrame(animateCelestialBodies);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="home-scene" id="home">
      <div className="celestial-layer" aria-hidden="true">
        <img
          ref={sunRef}
          className="celestial-body sun-body"
          src={sun}
          alt=""
        />
        <img
          ref={moonRef}
          className="celestial-body moon-body"
          src={moon}
          alt=""
        />
      </div>

      <div className="cloud-layer" aria-hidden="true">
        <div className="cloud-track">
          <div className="cloud-set">
            <img className="cloud cloud-big-one" src={bigCloudOne} alt="" />
            <img className="cloud cloud-mid-one" src={midCloudOne} alt="" />
            <img className="cloud cloud-big-two" src={bigCloudTwo} alt="" />
            <img
              className="cloud cloud-small-one"
              src={smallCloudFour}
              alt=""
            />
            <img className="cloud cloud-mid-two" src={midCloudFour} alt="" />
            <img className="cloud cloud-big-three" src={bigCloudThree} alt="" />
          </div>

          <div className="cloud-set">
            <img className="cloud cloud-big-one" src={bigCloudOne} alt="" />
            <img className="cloud cloud-mid-one" src={midCloudOne} alt="" />
            <img className="cloud cloud-big-two" src={bigCloudTwo} alt="" />
            <img
              className="cloud cloud-small-one"
              src={smallCloudFour}
              alt=""
            />
            <img className="cloud cloud-mid-two" src={midCloudFour} alt="" />
            <img className="cloud cloud-big-three" src={bigCloudThree} alt="" />
          </div>
        </div>
      </div>

      <div className="hero-copy">
        <h2>Hi, I'm Truong Nguyen</h2>
        <p>
          I'm a full-stack developer who builds clean, responsive, and
          user-friendly web applications.
        </p>
      </div>

      <img className="landblock" src={landblock} alt="" aria-hidden="true" />
      <img className="stars" src={stars} alt="" aria-hidden="true" />
    </section>
  );
}

export default Home;
