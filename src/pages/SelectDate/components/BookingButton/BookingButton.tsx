import { useNavigate } from 'react-router';
import * as styles from './BookingButton.css';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const BookingButton = ({ children, ...props }: Props) => {
  const navigate = useNavigate();
  return (
    <button
      className={styles.bookingButton}
      {...props}
      onClick={() => navigate('/seat-select')}
    >
      {children}
    </button>
  );
};

export default BookingButton;
