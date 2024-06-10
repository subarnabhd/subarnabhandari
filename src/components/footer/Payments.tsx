import Image from "next/image";
import React from "react";

const paymentMethods = [
  { src: "/payments/fonepay.svg", alt: "FonePay" },
  { src: "/payments/esewa.svg", alt: "Esewa" },
  { src: "/payments/khalti.svg", alt: "Khalti" },
  { src: "/payments/imepay.svg", alt: "IMEPay" },
  { src: "/payments/nepalpay.svg", alt: "NepalPay" },
  { src: "/payments/visa.svg", alt: "Visa" },
  { src: "/payments/mastercard.svg", alt: "Mastercard" },
  { src: "/payments/american-express.svg", alt: "American Express" },
  { src: "/payments/bank-transfer.svg", alt: "Bank Transfer" },
  { src: "/payments/cash-on-delivery.svg", alt: "Cash On Delivery" },
];

const Payments = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {paymentMethods.map((method, index) => (
        <Image
          key={index}
          className="py-2 px-2 border rounded hover-bg-neutral-2"
          src={method.src}
          width={60}
          height={100}
          alt={method.alt}
        />
      ))}
    </div>
  );
};

export default Payments;
