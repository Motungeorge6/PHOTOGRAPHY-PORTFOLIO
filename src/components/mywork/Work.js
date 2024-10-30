import React from "react";
import workImage1 from "../mywork/assets/IMG_9393.jpg";
import workImage2 from "../mywork/assets/IMG_9395.jpg";
import workImage3 from "../mywork/assets/IMG_9396.jpg";
import '../../styles/workStyle/work.css'; // Link to the CSS file

const Work = () => {
    return (
        <div className="horizontal-scroll-container">
            <div className="frame">
                <div className="frame-item">
                    <img src={workImage1} alt="Work 1" className="frame-image" />
                </div>
                <div className="frame-item">
                    <img src={workImage2} alt="Work 2" className="frame-image" />
                </div>
                <div className="frame-item">
                    <img src={workImage3} alt="Work 3" className="frame-image" />
                </div>
            </div>
        </div>
    );
};

export default Work;
