import Image from 'next/image';

interface Props {
  full?: boolean;
  icon?: string;
  title: string;
  type: 'button' | 'submit';
  variant: string;
}

const Button = ({ title, type, icon, variant, full }: Props) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && 'w-full'
      }`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} height={24} width={24} />}
      <label className="bold-26 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
