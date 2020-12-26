import React from "react";
import styled from "styled-components";
import device from './device';
// Import Themeprovider, theme.js dan global.js disini

// Card Components
const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #2f363d;
  background-color: white;
  border-radius: 0.25rem; 
  margin: auto;
  padding: 10px;

  @media ${device.laptop} { 
    width: 30% !important;
  }

  @media ${device.tablet} { 
    width: 50% !important;
  }

  @media ${device.mobile} { 
    width: 90% !important;
  }
`;

// Tambah button components disni

export default function App() {
  //  ambah config theme disini

  // tambah handleTheme disni

  // tambah useEffect disini

  return (
    <div>
      {/* Tambah Button Components disini */}
      {/* Card Component */}
      <Card>
        <img
          src="https://cdn.myanimelist.net/images/anime/1711/110614.jpg"
          alt="cover"
        />
        <p>
          After five years of harboring unspoken feelings, high-schooler Taiju
          Ooki is finally ready to confess his love to Yuzuriha Ogawa. Just when
          Taiju begins his confession however, a blinding green light strikes
          the Earth and petrifies mankind around the world—turning every single
          human into stone.
        </p>
      </Card>
    </div>
  );
}
