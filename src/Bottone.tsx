import React from 'react';

interface BottoneProps {
  label: string;
  onClick?: () => void;
}

const Bottone: React.FC<BottoneProps> = ({ label, onClick }) => {
  return (
    <button className="custom-bottone" onClick={onClick}>
      {label}
    </button>
  );
};

export default Bottone;
