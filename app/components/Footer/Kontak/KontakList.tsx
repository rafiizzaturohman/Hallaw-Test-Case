interface KontakListProps {
  iconName: string;
  contact: string;
}

const KontakList: React.FC<KontakListProps> = ({ iconName, contact }) => {
  return (
    <div className="flex flex-row space-x-2 md:space-x-4 items-center">
      <img src={`/icons/footerIcons/${iconName}.png`} alt={iconName} />

      <h4 className="text-sm md:text-lg">{contact}</h4>
    </div>
  );
};

export default KontakList;
