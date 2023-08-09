import React from "react";
import CardsDetails from "./CardsDetails";
import "./Cards.scss";
import { images } from "../../../assets/images/images";
// import { Row, Col } from 'antd';

function Cards() {
  const adminData = [
    {
      profilePic: images.Profile1,
      name: "Angela Moss",
      designation: "Marketing Manager",
      companyName: "Highspeed Studios",
      email: "angelamoss@mail.com",
      companylogo: "HS",
      companybackgroundcolor: "#35C691",
    },
    {
      profilePic: images.Profile2,
      name: "Ahmad Zayn",
      designation: "Photographer",
      companyName: "Audio Video Teams",
      email: "ahmadzayn@mail.com",
      companylogo: "AS",
      companybackgroundcolor: "#266FC7",
    },
    {
      profilePic: images.Profile3,
      name: "Brian Connor",
      designation: "Designer",
      companyName: "Crimzon Guards Studios",
      email: "brianconnor@mail.com",
      companylogo: "Cz",
      companybackgroundcolor: "#DC3472",
    },
    {
      profilePic: images.Profile4,
      name: "Courtney Hawkins",
      designation: "Programmer",
      companyName: "Highspeed Studios",
      email: "courtneyhawk@mail.com",
      companylogo: "HS",
      companybackgroundcolor: "#4B1644",
    },
    {
      profilePic: images.Profile5,
      name: "Chyntia Smilee",
      designation: "Marketing Manager",
      companyName: "Highspeed Studios",
      email: "angelamoss@mail.com",
      companylogo: "HS",
      companybackgroundcolor: "#CA90BB",
    },
    {
      profilePic: images.Profile6,
      name: "David Here",
      designation: "Programmer",
      companyName: "Highspeed Studios",
      email: "davidhere@mail.com",
      companylogo: "HS",
      companybackgroundcolor: "#A7E6E6",
    },
    {
      profilePic: images.Profile7,
      name: "Dennise Lee",
      designation: "Programmer",
      companyName: "Highspeed Studios",
      email: "denisselee@mail.com",
      companylogo: "HS",
      companybackgroundcolor: "#0A82EA",
    },
    {
      profilePic: images.Profile8,
      name: "Erbatov Axie",
      designation: "Programmer",
      companyName: "Highspeed Studios",
      email: "erbatovaxie@mail.com",
      companylogo: "HS",
      companybackgroundcolor: "#084F50",
    },
    {
      profilePic: images.Profile9,
      name: "Evan Khan",
      designation: "Programmer",
      companyName: "Highspeed Studios",
      email: "angelamoss@mail.com",
      companylogo: "HS",
      companybackgroundcolor: "#90D8D1",
    },
    {
      profilePic: images.Profile10,
      name: "Fanny Humble",
      designation: "Programmer",
      companyName: "Highspeed Studios",
      email: "fannyhumble@mail.com",

      companybackgroundcolor: "#4294E6",
    },
    {
      profilePic: images.Profile11,
      name: "Franklin Jr.",
      designation: "Programmer",
      companyName: "Highspeed Studios",
      email: "franklinjr@mail.com",
      companylogo: "HS",
      companybackgroundcolor: "#E96520",
    },
    {
      profilePic: images.Profile12,
      name: "Gandalf Hoos",
      designation: "Programmer",
      companyName: "Highspeed Studios",
      email: "gandalfhoss@mail.com",
      companylogo: "HS",
      companybackgroundcolor: "#0D3973",
    },
    {
      profilePic: images.Profile13,
      name: "Gabriella",
      designation: "Programmer",
      companyName: "Highspeed Studios",
      email: "gabriella@mail.com",
      companylogo: "HS",
      companybackgroundcolor: "#45A13B",
    },
    {
      profilePic: images.Profile14,
      name: "Hanny Shella",
      designation: "Programmer",
      companyName: "Highspeed Studios",
      email: "hannyshella@mail.com",
      companylogo: "HS",
      companybackgroundcolor: "#D92865",
    },
    {
      profilePic: images.Profile15,
      name: "Ivankov",
      designation: "Programmer",
      companyName: "Highspeed Studios",
      email: "ivankov123@mail.com",
      companylogo: "HS",
      companybackgroundcolor: "#9304F0",
    },
  ];

  return (
    <div className="card-wrapper">
      {adminData.map((admin, index) => (
        <div className="card-col" key={index}>
          <CardsDetails
            profilePic={admin.profilePic}
            companylogo={admin.companylogo}
            companybackgroundcolor={admin.companybackgroundcolor}
            name={admin.name}
            designation={admin.designation}
            companyName={admin.companyName}
            email={admin.email}
          />
        </div>
      ))}
    </div>
  );
}

export default Cards;
