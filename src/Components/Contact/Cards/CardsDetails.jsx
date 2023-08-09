import { React } from 'react'
import './CardsDetails.scss';
import { ReactComponent as MoreMenu } from '../../../assets/svgs/MoreMenu.svg';
import { ReactComponent as Phone } from '../../../assets/svgs/Phone.svg';
import { ReactComponent as ContactMail } from '../../../assets/svgs/ContactMail.svg';
import { Card, Button, Popover } from 'antd';
import { Link } from 'react-router-dom';

const content = (
  <div>
    <p>Edit</p>
    <p>Delete</p>
  </div>
);

function CardsDetails({ profilePic, name, designation, companyName, email, companylogo, companybackgroundcolor }) {

  return (
    <>
      <Card className='cardComponent' hoverable={true}>
        <div className="moreMenu">
          {/* <Button type="default">
          <MoreMenu />
        </Button> */}
          <Popover placement="bottomLeft" content={content} trigger="click" overlayClassName='popover'>
            <Button><MoreMenu /></Button>
          </Popover>
        </div>
        <div className="profilePic">
          <img src={profilePic} alt="profilepic" />
          <div className="companylogo" style={{ backgroundColor: companybackgroundcolor }}>
            <h4>{companylogo}</h4>
          </div>
        </div>


        <div className="about">
          <h4 className='name'>{name}</h4>
          <p className='designation'>{designation} at</p>
          <p className='companyName'>{companyName}</p>
        </div>
        <Link to={`tel:+12 345 6789 0`} className="contactWrapper">
          <div className="contactIcon">
            <Phone className='themeColor' />
          </div>
          <span className='contactStyles'>  +12 345 6789 0 </span>
        </Link>
        <Link to={`mailto:${email}`} className="contactWrapper">
          <div className="contactIcon">
            <ContactMail className='themeColor' />
          </div>
          <span className='contactStyles'> {email} </span>
        </Link>
      </Card>
    </>
  );
};

export default CardsDetails;
