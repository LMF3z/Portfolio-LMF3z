'use client';

interface Props {
  label: string;
  children: React.ReactNode;
  containerFormControlClasses?: string;
  labelClasses?: string;
}

const CustomInput = ({
  label,
  children,
  containerFormControlClasses,
  labelClasses,
}: Props) => {
  return (
    <div className={`w-full grid ${containerFormControlClasses}`}>
      <label id={label} className={`${labelClasses}`}>
        {label}
      </label>
      {children}
    </div>
  );
};

export default CustomInput;
