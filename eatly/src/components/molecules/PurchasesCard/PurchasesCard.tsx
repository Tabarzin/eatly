import st from "./purchasescard.module.css";

import React from "react";

type PurchasesCardProps = {
  imageSrc: string;
  title: string;
  status: string;
  time: string;
  className?: string;
};

const PurchasesCard: React.FC<PurchasesCardProps> = ({
  imageSrc,
  title,
  status,
  time,
  className,
}) => {
  const statusClass = status === "Cancelled" ? st.cancelledStatus : st.status;

  return (
    <div className={`${st.purchases_card} ${className}`}>
      <div>
        <img src={imageSrc} alt="Purchase" />
      </div>
      <div className={st.text_block}>
        <p className={st.title}>{title}</p>
        <p className={`${st.status} ${statusClass}`}>{status}</p>
      </div>
      <p className={st.time}>{time}</p>
    </div>
  );
};

export default PurchasesCard;
