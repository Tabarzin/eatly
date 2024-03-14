import st from "./purchasescard.module.css";

import React from "react";

type PurchasesCardProps = {
  imageSrc: string;
  title: string;
  status: string;
  time: string;
};

const PurchasesCard: React.FC<PurchasesCardProps> = ({
  imageSrc,
  title,
  status,
  time,
}) => {
  const statusClass = status === "Cancelled" ? st.cancelledStatus : st.status;

  return (
    <div className={st.purchases_card}>
      <div>
        <img src={imageSrc} alt="Purchase" />
      </div>
      <div>
        <p className={st.title}>{title}</p>
        <p className={`${st.status} ${statusClass}`}>{status}</p>
        <p className={st.time}>{time}</p>
      </div>
    </div>
  );
};

export default PurchasesCard;
