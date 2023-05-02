import React, { useEffect } from "react";

// Components
import Core from "../Components/Team/Core";
import Departments from "./../Components/Team/Departments";
// import Domain from "../Components/Team/Domain";

// css
import "../Components/Team/css/Team.css";
import "../Components/Team/css/loading.css";

// Data
import db from "./../Data/dbTeam.json";

export default function Team() {
  const coreMember = db.data.core;
  const domain = db.data;

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section id="OurTeam">
        {/* Core */}
        <div className="TeamCore">
          <p className="TeamName">
            Meet Our <span>Team.</span>
          </p>
          <p className="TeamNameSubTitle">
            We are a tight-knit community of passionate people devoted to
            bringing about vibrant and awe-inspiring changes in the field of
            Entrepreneurship. The pillars of our crew are the Marketing group,
            the Creative group, the Technical group, and the Operations group.
          </p>
          <div id="CoreTeam">
            {coreMember.map((data, i) => (
              <Core mem={data} key={i} />
            ))}
          </div>
        </div>
        <div className="space" />
        {/* Technical */}
        <Departments
          name="Technical"
          title="Those who help us design, analyze, troubleshoot, diagnose and
            resolve technicalities in FED!"
          data={domain.Tech}
        />

        <div className="space" />
        {/* Creative */}
        {/* <div className="TeamCreative">
          <p className="TeamName">
            Team <span>Creative</span>
          </p>
          <p className="TeamNameSubTitle">
            Those who help us illustrate, create, design, address, showcase, and
            introduce FED as a whole- behind the veil!
          </p>
          <div id="CreativeTeam">
            {domain.creative.map((data, i) => (
              <Domain mem={data} key={i} />
            ))}
          </div>
        </div> */}
        <div className="space" />
        {/* Marketing */}
        {/* <div className="TeamCreative">
          <p className="TeamName">
            Team <span>Marketing</span>
          </p>
          <p className="TeamNameSubTitle">
            Those who help us strategize, develop, promote, grow and market
            FED's endeavor!
          </p>
          <div id="MarketingTeam">
            {domain.marketing.map((data, i) => (
              <Domain mem={data} key={i} />
            ))}
          </div>
        </div> */}
        <div className="space" />
        {/* Operations */}
        {/* <div className="TeamCreative">
          <p className="TeamName">
            Team <span>Operations</span>
          </p>
          <p className="TeamNameSubTitle">
            Those who help us plan, strategize, commemorate, organize and
            operate FED's initiatives!
          </p>
          <div id="OperationsTeam">
            {domain.operation.map((data, i) => (
              <Domain mem={data} key={i} />
            ))}
          </div>
        </div> */}
        <div className="space" />
        <div className="space"></div>
      </section>
    </>
  );
}
