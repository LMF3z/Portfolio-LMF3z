'use client';

import CustomButton from './button/CustomButton';

const CustomButtonResumeDownload = () => {
  const handleClient = async () => {
    let link = document.createElement('a');
    let url = '/Lennon-Sanchez-professional-web-developer-resume(english).pdf';

    link.href = url;
    link.download = 'Lennon-Sanchez-resume(english).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <CustomButton handleClick={handleClient} title='Resume' />
    </>
  );
};

export default CustomButtonResumeDownload;
