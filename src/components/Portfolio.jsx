import { useSpring, animated } from "@react-spring/web";

const Portfolio = () => {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <animated.section style={animation} className="md:py-32 lg:py-10 xl:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-2 md:gap-10 text-white sm:py-32 md:py-32 lg:py-32 mt-44">
        hello
      </div>
    </animated.section>
  )
}

export default Portfolio