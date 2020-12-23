import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Avatar, Button, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import CustomerInfo from './CustomerInfo';
import CustomerEditInfo from './CustomerEditInfo';
import PetCard from './PetCard';
import './profile.css';

// Ant Design
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const RenderCustomerProfile = ({ userInfo }) => {
  // Dummy Data
  const pets = [
    {
      id: 1,
      pet_name: 'Rabby',
      color: 'Red',
      date_of_birth: '2020-11-02',
      phone_number: '123456789',
      image_url:
        'https://i.pinimg.com/originals/29/29/62/292962d64cdc42f9e8295f5ca56ba1ce.jpg',
    },
    {
      id: 2,
      pet_name: 'Doggy',
      color: 'Beige',
      date_of_birth: '2010-11-02',
      phone_number: '123456789',
      image_url:
        'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg',
    },
  ];

  const [petData, setPetData] = useState(pets);

  const [displayUserInfoInputs, toggleUserInfoInputs] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [userFormData, setUserFormData] = useState({
    name: '',
    email: '',
  });
  const [currentPetSelected, setCurrentPetSelected] = useState(0);

  useEffect(() => {
    setUserFormData({
      name: userInfo.name,
      email: userInfo.email,
    });
  }, [userInfo]);

  // Destructure State
  const { name, email } = userFormData;

  const onChange = e => {
    setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
  };

  // Edit User Info Submit Function
  const onSubmit = e => {
    e.preventDefault();
    setUserFormData(userFormData);
  };

  const showModal1 = () => {
    setIsModalVisible1(true);
  };

  const handleOk1 = () => {
    setIsModalVisible1(false);
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };

  const handleSave = formData => {
    const newPets = petData.map(newpet => {
      if (newpet.id === formData.id) {
        return {
          id: formData.id,
          pet_name: formData.pet_name,
          color: formData.color,
          date_of_birth: formData.date_of_birth,
          image_url: formData.image_url,
          phone_number: formData.phone_number,
        };
      } else {
        return newpet;
      }
    });
    setPetData(newPets);
  };

  const handleDelete = id => {
    console.log('ID', id);
    const newPets = petData.filter(pet => pet.id !== id);
    setPetData(newPets);
  };

  return (
    <div>
      {userInfo && (
        <div className="profile-container">
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
              {!displayUserInfoInputs ? (
                <CustomerInfo
                  name={name}
                  email={email}
                  toggleUserInfoInputs={toggleUserInfoInputs}
                  displayUserInfoInputs={displayUserInfoInputs}
                />
              ) : (
                <CustomerEditInfo
                  name={name}
                  email={email}
                  saveChanges={onSubmit}
                  updateForm={onChange}
                  toggleUserInfoInputs={toggleUserInfoInputs}
                  displayUserInfoInputs={displayUserInfoInputs}
                />
              )}
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 16 }}>
              <div className="upcoming-appointments">
                <h2>Upcoming Appointments</h2>
                <div className="upcoming-appointments-content">
                  <div className="current-appointments">
                    <p>Date:</p>
                    <p>12/4/2020</p>
                    <p>Location:</p>
                    <p>123 SW Air LN 12345</p>
                    <p>Pet:</p>
                    <p>Molly</p>
                  </div>
                  <div className="current-appointments">
                    <p>Date:</p>
                    <p>12/4/2020</p>
                    <p>Location:</p>
                    <p>123 SW Air LN 12345</p>
                    <p>Pet:</p>
                    <p>Rusty</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="pet-container">
            <Row gutter={[16, 16]}>
              {petData.map((pet, index) => (
                <PetCard
                  showPetModal={showModal1}
                  closePetModal={setIsModalVisible1}
                  key={pet.pet_name}
                  pet={pet}
                  handleSave={handleSave}
                  petData={petData}
                  setPetData={setPetData}
                  handleDelete={handleDelete}
                  petIndex={index}
                  setCurrentPetSelected={setCurrentPetSelected}
                />
              ))}
              <Modal
                title="Pet Info"
                visible={isModalVisible1}
                onOk={handleOk1}
                onCancel={handleCancel1}
              >
                <p>Name: {petData[currentPetSelected].pet_name}</p>
                <p>Color: {petData[currentPetSelected].color}</p>
                <p>DOB: {petData[currentPetSelected].date_of_birth}</p>
                <p>Contact: {petData[currentPetSelected].phone_number}</p>
              </Modal>
              <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
                <div className="add-pets">
                  <i className="fas fa-plus"></i>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default RenderCustomerProfile;
