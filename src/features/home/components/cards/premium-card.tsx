import { Button } from "@/common";

export const PremiumCard = () => {
  return (
    <div className="p-4 bg-twitter-dark rounded-lg border-gray-700 border-[1px]">
      <h3 className="font-bold text-lg text-white font-interRegular28">
        Twitter Premium
      </h3>
      <p className="text-sm text-gray-600 font-interRegular18">
        Accede a funcionalidades exclusivas
      </p>
      <Button label="Suscribirse" onClick={() => console.log('Post')} />
    </div>
  );
};
