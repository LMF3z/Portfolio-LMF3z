'use client';

interface Props {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  classes?: string;
}

const CustomButton = ({ children, type = 'button', classes }: Props) => {
  return (
    <button
      className={`p-3 rounded-lg bg-custom_purple ${classes}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default CustomButton;
