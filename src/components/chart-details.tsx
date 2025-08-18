import { ArrowDown, ArrowUp, RedArrowDown } from '@/assets';

const details = [
  {
    price: `₦120,000,000.00`,
    p: 'Total Inflow',
    Icon: ArrowUp,
    percentage: '2.5%',
    text: `text-[#4545FE]`,
    percent: `text-[#12B76A]`,
  },
  {
    price: `₦50,000,000.00`,
    p: 'MRR',
    Icon: ArrowUp,
    percentage: '2.5%',
    text: `text-[#12B76A]`,
    percent: `text-[#12B76A]`,
  },
  {
    price: `₦200,000,000.00`,
    p: 'Commission Revenue',
    Icon: ArrowDown,
    percentage: '0.5%',
    text: `text-[#14B8A6]`,
    percent: `text-[#14B8A6]`,
  },

  {
    price: `₦100,000,000.00`,
    p: 'Commission Revenue',
    Icon: RedArrowDown,
    percentage: '0.5%',
    text: `text-[#F04438]`,
    percent: `text-[#F04438]`,
  },
];

const ChartDetails = () => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {details.map(({ price, p, Icon, percentage, text, percent }) => (
        <div
          className={`p-4 space-y-2 border border-[ #E4E4E4] rounded-[12px] sm:max-w-[189px] h-[72px] w-full`}
        >
          <p className={`font-semibold text-[19px] ${text}`}>{price}</p>
          <div className="flex items-center gap-1">
            <p className={`text-deep-gray text-[10px]`}>{p}</p>
            <Icon />
            <p className={`${percent} text-[10px]`}>{percentage}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChartDetails;
