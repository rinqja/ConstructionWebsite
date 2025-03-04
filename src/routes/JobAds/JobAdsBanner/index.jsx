import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JobAdsBanner.scss";
import Image35 from "../../../assets/imges/35.png";
import Image36 from "../../../assets/imges/36.png";
import Image37 from "../../../assets/imges/37.png";
import Image38 from "../../../assets/imges/38.png";
import Image39 from "../../../assets/imges/39.png";
import Image40 from "../../../assets/imges/40.png";
import Image51 from "../../../assets/imges/51.png";
import Image52 from "../../../assets/imges/52.png";
import Image53 from "../../../assets/imges/53.png";
import RightIcon from "../../../assets/icons/black-right.svg";
import BewerbungModal from "../BewerbungModal";
import BewerbungSubModal from "../BewerbungSubModal";
import  Zoom  from "react-reveal/Zoom";
import Fade from "react-reveal";
import  Rotate  from "react-reveal/Rotate";
export default function JobAdsBanner() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalRoad, setIsShowModalRoad] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div className="job-ads-banner-all-contnet-alignment">
        <div className="container-md7">
          <div className="all-grid">
            <div className="grid">
              <div className="grid-items">
                <div className="image-style animated-right-to-left">
                  <img src={Image35} alt="Image35" />
                </div>
                <div className="box animated-left-to-right"></div>
              </div>
              <div className="grid-items">
                <div className="two-col-grid">
                  <div className="two-col-grid-items animated-paragraph">
                    <img src={Image36} alt="Image36" />
                  </div>
                  <div className="two-col-grid-items animated-right-to-left">
                    <img src={Image37} alt="Image37" />
                  </div>
                </div>
                <div className="text animated-right-to-left">
                  <h4>Berufskraftfahrer</h4>
                  <p className="animated-right-to-left1">
                    Lorem ipsum dolor sit amet. Sed corporis modi et totam sunt
                    qui dolor quisquam? Et adipisci animi sed internos
                    voluptatem et quia pariatur in modi officiis.
                  </p>
                  <p className="animated-right-to-left2">
                    Ut possimus velit rem doloribus culpa sed nihil ipsa qui
                    debitis error. Qui doloremque facere et velit voluptas in
                    itaque distinctio a velit pariatur cum quos blanditiis et
                    recusandae tempore? Sit nesciunt natus aut debitis
                    aspernatur est quidem quos. Est blanditiis culpa hic velit
                    ipsum qui nihil cumque qui sint dicta aut quia obcaecati!
                  </p>
                  <p className="animated-right-to-left3"> 
                    Ea delectus amet eum asperiores repellat vel officia
                    voluptatibus ab ratione sunt ea quam fugit. Eum soluta
                    repellat a rerum quis ex voluptatem error et quae iste ut
                    repellat quae et exercitationem animi At adipisci explicabo.
                  </p>
                </div>
                <div className="text-icon" onClick={() => setIsShowModal(true)}>
                  <span>Bewerben</span>
                  <img src={RightIcon} alt="RightIcon" />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-items">
                <div className="image-style">
                  <Rotate right >
                  <img src={Image39} alt="Image39" />
                  </Rotate>
                </div>
                <div className="sec-image">
                  <Fade left>
                  <img src={Image40} alt="Image40" />
                  </Fade>
                </div>
              </div>
              <div className="mobile-view-show-div">
                <div className="mobile-grid">
                  <div className="mobile-grid-items">
                    <div className="main-mobile-image">
                      <Fade right >
                      <img src={Image51} alt="Image51" />
                      </Fade>
                    </div>
                  </div>
                  <div className="mobile-grid-items">
                    <div className="image">
                      <img src={Image52} alt="Image52" />
                    </div>
                    <div className="image">
                      <img src={Image53} alt="Image53" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-items">
                <div className="two-col-grid">
                  <div className="two-col-grid-items">
                    <Fade left>
                    <img src={Image38} alt="Image38" />
                    </Fade>
                  </div>
                  <Fade top>
                  <div className="two-col-grid-items bg-blue"></div>
                  </Fade>
                </div>
                <Fade top >
                <div className="text">
                  <h4>Straßentiefbau</h4>
                  <p>
                    Lorem ipsum dolor sit amet. Sed corporis modi et totam sunt
                    qui dolor quisquam? Et adipisci animi sed internos
                    voluptatem et quia pariatur in modi officiis.
                  </p>
                  <p>
                    Ut possimus velit rem doloribus culpa sed nihil ipsa qui
                    debitis error. Qui doloremque facere et velit voluptas in
                    itaque distinctio a velit pariatur cum quos blanditiis et
                    recusandae tempore? Sit nesciunt natus aut debitis
                    aspernatur est quidem quos. Est blanditiis culpa hic velit
                    ipsum qui nihil cumque qui sint dicta aut quia obcaecati!
                  </p>
                  <p>
                    Ea delectus amet eum asperiores repellat vel officia
                    voluptatibus ab ratione sunt ea quam fugit. Eum soluta
                    repellat a rerum quis ex voluptatem error et quae iste ut
                    repellat quae et exercitationem animi At adipisci explicabo.
                  </p>
                </div>
                </Fade>
                <div
                  className="text-icon"
                  onClick={() => setIsShowModalRoad(true)}
                >
                  <span>Bewerben</span>
                  <img src={RightIcon} alt="RightIcon" />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-items">
                <div className="image-style">
                  <Fade  top left>
                  <img src={Image35} alt="Image35" />
                  </Fade>
                </div>
                <Fade bottom>
                <div className="box"></div>
                </Fade>
              </div>
              <div className="grid-items">
                <div className="two-col-grid">
                  <div className="two-col-grid-items">
                    <Fade  top right>
                    <img src={Image36} alt="Image36" />
                    </Fade>
                  </div>
                
                  <div className="two-col-grid-items">
                      <Fade right >
                    <img src={Image37} alt="Image37" />
                    </Fade>
                  </div>
                </div> <Fade right >
                <div className="text">
                 
                       <h4>Bauhelfer</h4>
                 
                  <p>
                    Lorem ipsum dolor sit amet. Sed corporis modi et totam sunt
                    qui dolor quisquam? Et adipisci animi sed internos
                    voluptatem et quia pariatur in modi officiis.
                  </p>
                  <p>
                    Ut possimus velit rem doloribus culpa sed nihil ipsa qui
                     debitis error. Qui doloremque facere et velit voluptas in
                    itaque distinctio a velit pariatur cum quos blanditiis et
                    recusandae tempore? Sit nesciunt natus aut debitis
                    aspernatur est quidem quos. Est blanditiis culpa hic velit
                    ipsum qui nihil cumque qui sint dicta aut quia obcaecati!
                  </p>
                  <p>
                    Ea delectus amet eum asperiores repellat vel officia
                    voluptatibus ab ratione sunt ea quam fugit. Eum soluta
                    repellat a rerum quis ex voluptatem error et quae iste ut
                    repellat quae et exercitationem animi At adipisci explicabo.
                  </p>
                </div> 
                </Fade>
                <div className="text-icon"    onClick={() => setIsShowModalRoad(true)}
                >
                  <span>Bewerben</span>
                  <img src={RightIcon} alt="RightIcon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isShowModal && (
        <BewerbungModal
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
        />
      )}
      {isShowModalRoad && (
        <BewerbungSubModal
          isShowModalRoad={isShowModalRoad}
          setIsShowModalRoad={setIsShowModalRoad}
        />
      )}
    </div>
  );
}
