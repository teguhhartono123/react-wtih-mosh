

interface Props {
    children:string;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'react';
    onClick?: () => void;
}

const Button = ({ children, onClick, color = 'Primary'} : Props) => {
  return (
    <button className= {'btn btn-' + color} onClick={onClick}> {children} </button>
  )
}

export default Button