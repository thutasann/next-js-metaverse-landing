import styles from "../styles";
import Image from "next/image";

const NewFeatures = ({ imgUrl, title, subtitle  }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <Image
        src={imgUrl}
        width={35}
        height={35}
        alt="New Features Icon"
        className="object-contain"
      />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">{title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">{subtitle}</p>
  </div>
);

export default NewFeatures;
