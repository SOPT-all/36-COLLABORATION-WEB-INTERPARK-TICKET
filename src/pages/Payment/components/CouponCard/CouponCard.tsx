import CouponIcon from './svg/svg_coupon.svg?react';

interface CouponCardProps {
  onClick?: () => void;
}

export default function CouponCard({ onClick }: CouponCardProps) {
  return (
    <div onClick={onClick}>
      <CouponIcon className="couponImage" />
      <div className="couponInfo"></div>
    </div>
  );
}
