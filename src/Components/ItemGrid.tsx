interface Props {
  title: string;
  icon: string;
  classesImages?: string;
}

const ItemGrid = ({ title, icon, classesImages }: Props) => {
  return (
    <article className='w-full h-full flex flex-col justify-center items-center space-y-5 rounded-lg p-3 border border-[#3178c6]'>
      <h2 className='text-sm md:text-2xl'>{title}</h2>
      <img
        src={icon}
        alt='icon-skills'
        className={`h-20 object-cover ${classesImages}`}
      />
    </article>
  );
};

export default ItemGrid;
