import React from "react";

type TopicCardProps = {
  text: string;
};

const TopicCard: React.FC<TopicCardProps> = ({ text }) => {
  return (
    <div className="w-full bg-[#191919] border border-[#FA3573] rounded-md p-3">
      <p className="text-white text-sm text-center">{text}</p>
    </div>
  );
};

export default TopicCard;