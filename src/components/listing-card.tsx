import { SolarHome, Profile1 } from '@/assets';
const listings = [
  {
    Icon: SolarHome,
    text: `Listings Overview`,
    total: `1.8k`,
    active: `80`,
    archived: `1k`,
    textOne: `Total`,
    textTwo: `Active`,
    textThree: `Archived`,
  },
  {
    Icon: Profile1,
    text: `Users Overview`,
    total: `20.7k`,
    active: `8.5k`,
    archived: `7.5k`,
    textOne: `Total`,
    textTwo: `Riders`,
    textThree: `Subscribers`,
  },
];

const ListingCard = () => {
  return (
    <div className="space-y-5 ">
      {listings.map(({ Icon, text, total, active, archived, textOne, textTwo, textThree }) => (
        <div className="border border-[#E4E4E4] rounded-2xl w-[407px] space-y-[20px] p-4">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Icon />
              <p className="font-medium text-sm">{text}</p>
            </div>
            <p className="text-[#4545FE]"> {`View all >`} </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-2 flex justify-between w-full">
              <div className="space-y-2">
                <p className="text-gray-600 font-medium text-sm">{textOne}</p>
                <p className="text-gray-900 font-semibold text-2xl">{total}</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 font-medium text-sm">{textTwo}</p>
                <p className="text-gray-900 font-semibold text-2xl">{active}</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 font-medium text-sm">{textThree}</p>
                <p className="text-gray-900 font-semibold text-2xl">{archived}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListingCard;
