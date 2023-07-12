import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Studied at mount kenya University,Information techonology
          </h3>
      
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Worked with county governmemt of kericho
          </h3>

          {/* <h4 className="vertical-timeline-element-subtitle">
            Internship
          </h4> */}

          <p> Internship</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Studied Software engeneer, Moringa school
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Developer
          </h4>
          <p>Developed the frontend and backend infrastructure projects.</p>
        </VerticalTimelineElement>

      
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
