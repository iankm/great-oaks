import Tilt from 'react-parallax-tilt';
import Image from 'next/image';

export const Logo: React.FC = ({}) => {
  return (
    <Tilt
      style={{
        borderRadius: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '275px',
        height: '275px',
        background: 'rgba(255, 255, 255, 0.21)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(3px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        transition: 'ease-in-out 0.3s',
      }}
    >
      <Image
        alt="Great Oaks Venture Capital Logo"
        src={'/assets/images/logo.png'}
        layout="fixed"
        width={180}
        height={160}
        style={{ margin: '0 auto' }}
      />
    </Tilt>
  );
};

export default Logo;
