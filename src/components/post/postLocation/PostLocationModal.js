import React from "react";
import ReactModal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";
import styled from 'styled-components';

ReactModal.setAppElement("body");

export default function LinkPageContentModal({ locationIsOpen, onRequestClose, user, geolocation }) {
  
    const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  return (

    <ModalStyle 
        isOpen={locationIsOpen}
        contentLabel='Delete Modal'
        >

        <Header>
          <h1>{user}'s location</h1>
          <CloseLocation onClick={() => onRequestClose(!locationIsOpen)}>
            <AiOutlineClose />
          </CloseLocation>
        </Header>
        <MapsFrame>
          <p>Loading location...</p>
          <LocationObject
            loading="lazy"
            allowFullScreen
            data={`https://www.google.com/maps/embed/v1/place?q=${geolocation.latitude},${geolocation.longitude}&key=${API_KEY}`}
          ></LocationObject>
        </MapsFrame>

    </ModalStyle>
  );
}

const ModalStyle = styled(ReactModal)`
    transform: translate(50%, 50%);
    width:50%;
    padding: 20px 50px;
    background-color: #333333;
    border-radius: 20px;
    position: fixed;
    border: none;
    top:0;
    left:0;
    z-index: 50;

    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
        transform: translate(0, 50%);
        border-radius: 0;
        padding: 20px 0;
    } 
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  h1 {
    font-family: Oswald;
    font-weight: bold;
    font-size: 38px;
    color: #ffffff;
  }
  @media (max-width: 600px) {
    padding: 0 15px;
        h1 {
            font-size: 25px;
        }
    } 
`;

const CloseLocation = styled.button`
    background-color: transparent;
    color: white;
    cursor: pointer;
    border: none;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0px;
`;

const MapsFrame = styled.div`
    font-family: Oswald;
    position: relative;
    font-size: 24px;
    width: 100%;
    height: 100%;
    max-width: 790px;
    min-height: 300px;
    margin-bottom: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
`;

const LocationObject = styled.object`
    position: absolute;
    border: none;
    outline: none;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    width: 100%;
    max-width: 790px;
    min-height: 300px;
    height: 240px;
    margin-bottom: 23px;

    @media (max-width: 614px) {
        height: 200px;
    }
`;