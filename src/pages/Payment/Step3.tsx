import { useNavigate } from 'react-router';
import PayHeader from '@/shared/components/Header/PayHeader/PayHeader';

export default function PaymentStep3() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/payment/step2');
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <>
      <PayHeader step={3} onBackClick={handleBack} onCloseClick={handleClose} />
    </>
  );
}
