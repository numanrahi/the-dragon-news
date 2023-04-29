import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mb-2 w-100' variant="outline-primary"><FaGoogle /> Login With Google</Button>
            <Button className='w-100' variant="outline-secondary"><FaGithub></FaGithub> Login With Github</Button>
            <div>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item className='text-center'><FaFacebook className='me-2'></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item className='text-center'><FaTwitter className='me-2'></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item className='text-center'><FaInstagram className='me-2'></FaInstagram>Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;