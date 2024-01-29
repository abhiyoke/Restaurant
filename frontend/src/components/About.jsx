import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we are serious about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nemo
            nostrum mollitia labore sequi magni ad fugiat corrupti incidunt!
            Officia aspernatur sunt iusto fuga iste quos velit, atque nostrum ad
            quidem assumenda iure tempore quas recusandae totam, repellendus
            hic. Quidem culpa modi perferendis rem doloremque reiciendis ea quod
            accusamus aut!
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
