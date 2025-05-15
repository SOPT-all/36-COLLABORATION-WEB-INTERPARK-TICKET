import * as styles from './BookingButton.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const BookingButton = ({ children, ...props }: Props) => {
  return (
    <button className={styles.bookingButton} {...props}>
      {children}
    </button>
  );
};

export default BookingButton;
