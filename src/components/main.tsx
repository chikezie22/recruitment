import { Home, Toolbox, Profile, Article, Scroll, Search } from '@/assets';
import { Input } from './ui/input';

const items = [
  {
    Icon: Toolbox,
    text: 'Listings',
  },
  {
    Icon: Profile,
    text: 'User',
  },
  {
    Icon: Article,
    text: 'Request',
  },
  {
    Icon: Scroll,
    text: 'Applications',
  },
];

const Main = () => {
  return (
    <div className="px-[78px] py-[14px] max-w-[1440px] mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex px-[24px] py-[7px] bg-[#F5F5F5] rounded-[8px] w-fit items-center gap-2">
          <Home />
          <p className="font-semibold text-sm">Dashboard</p>
        </div>

        {items.map(({ Icon, text }) => (
          <div className="flex px-[24px] py-[7px]  w-fit items-center gap-2">
            <Icon />
            <p className="text-deep-gray text-sm">{text}</p>
          </div>
        ))}
        <div className="relative !justify-self-end sm:!w-[319px]">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 ">
            <Search />
          </span>
          <Input
            type="search"
            placeholder="Search listings, users here..."
            className="pl-10 bg-[#f5f5f5]  "
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
