import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

ReactModal.setAppElement("body");

export default function DeleteModal({
  modalIsOpen,
  setModalIsOpen,
  Delete,
  isLoading,
}) {

  return (
    <ModalStyle
      isOpen={modalIsOpen}
      contentLabel='Delete Modal'
    >
      {isLoading 
        ? <h1>Loading...</h1> 
        : <>
            <Title>
              Tem certeza que deseja excluir essa publicação?
            </Title>

            <ButtonsContainer>
              <BackButton onClick={() => setModalIsOpen(!modalIsOpen)}>
                Não, voltar
              </BackButton>

              <DeleteButton onClick={Delete}>
                Sim, excluir
              </DeleteButton>
            </ButtonsContainer>
          </>
      }
    </ModalStyle>
  );
}

const ModalStyle = styled(ReactModal)`
  top: 0;
  left: 0;
  transform: translate(50%, 150%);
  background: #333333;
  border-radius: 20px;
  width:50%;
  padding: 20px 50px;
  z-index: 10;
  @media (max-width: 600px) {
      width: 100%;
      flex-direction: column;
      transform: translate(0, 150%);
      border-radius: 0;
      padding: 20px 0;
  }
`;

const Title = styled.h1`
  color: white;
  font: 700 34px 'Lato', sans-serif;
`;

const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin: 30px;
`;

const BackButton = styled.button`
  background: white;
  border: none;
  border-radius: 5px;
  color: #1877F2;
  cursor: pointer;
  outline: none;
  padding: 8px 20px;
  font-weight: 700;
  font-size: 16px;

  @media (max-width: 614px) {
      padding: 5px 20px;
      font-size: 14px;  
      margin-right: 5px;
    }
`;

const DeleteButton = styled.button`
  background: #1877F2;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  outline: none;
  padding: 8px 20px;
  font-weight: 700;
  font-size: 16px;

  @media (max-width: 614px) {
      padding: 5px 20px;
      font-size: 14px;  
      margin-left: 5px;
    }
`;