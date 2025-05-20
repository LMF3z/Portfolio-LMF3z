interface Props {
  videoUrl: string;
  title: string;
}

const ShowVideoPresentationModal = ({ videoUrl, title }: Props) => {
  return (
    <iframe
      className='w-full h-full'
      src={videoUrl}
      title={title}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
    ></iframe>
  );
};

export default ShowVideoPresentationModal;
