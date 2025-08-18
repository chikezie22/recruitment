import { LeftArrow, RightArrow, PhotoOne, PhotoTwo, PhotoThree } from './assets';
import Main from './components/main';
import NavBar from './components/navbar';
import MonthlyBarChart from './components/bar-chart';
import { Button } from './components/ui/button';
import { useState } from 'react';
import ChartDetails from './components/chart-details';
import ListingCard from './components/listing-card';

const App = () => {
  const [time, setTime] = useState('1year');
  return (
    <div className="space-y-3 pb-3">
      <NavBar />
      <Main />
      <div className="px-[78px] space-y-3 max-w-[1440px] mx-auto">
        <h1 className="font-euclid font-semibold text-main-black">Welcome, Ahmed</h1>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_407px] gap-5">
          <div className="border border-[#E4E4E4] rounded-[16px] p-[22px]">
            <div className="flex justify-between items-center">
              <div className="space-y-3">
                <h3 className="font-semibold text-[20px] text-main-black">Sales Overview</h3>
                <p className="text-xs">Showing overview Jan 2022 - Sep 2022</p>
              </div>
              <div className="flex flex-col">
                <Button
                  variant={'outline'}
                  className="font-medium text-xs p-4 rounded-[78px] max-w-[177px]  self-end"
                >
                  View Transactions
                </Button>
                <div className="float-end flex gap-3 my-3">
                  <Button
                    variant={'outline'}
                    className={`${
                      time === '1week'
                        ? 'bg-[#F5F5F5] font-semibold text-sm text-deep-gray'
                        : 'text-deep-gray'
                    }`}
                    onClick={() => setTime('1week')}
                  >
                    1 Week
                  </Button>
                  <Button
                    variant={'outline'}
                    className={`${
                      time === '1month'
                        ? 'bg-[#F5F5F5] font-semibold text-sm text-deep-gray'
                        : 'text-deep-gray'
                    }`}
                    onClick={() => setTime('1month')}
                  >
                    1 Month
                  </Button>
                  <Button
                    variant={'outline'}
                    className={`${
                      time === '1year'
                        ? 'bg-[#F5F5F5] font-semibold text-sm text-deep-gray'
                        : 'text-deep-gray'
                    }`}
                    onClick={() => setTime('1year')}
                  >
                    1 Year
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] ">
              <div className="flex justify-center items-center gap-3">
                <LeftArrow />
                <MonthlyBarChart />
                <RightArrow />
              </div>
              <div className="place-content-center mx-auto">
                <ChartDetails />
              </div>
            </div>
          </div>
          <div className="justify-self-center">
            <ListingCard />
          </div>
        </div>
        {/* photo section */}
        <div className="flex gap-[15px] flex-wrap justify-center">
          <div className="w-[418px] h-[286px] rounded-[12px] overflow-clip">
            <img src={PhotoOne} alt="photo" className="w-full h-full object-cover" />
          </div>
          <div className="w-[418px] h-[286px] rounded-[12px] overflow-clip relative">
            <img src={PhotoTwo} alt="photo" className="w-full h-full object-cover" />
            <div className="absolute bottom-5 left-4 text-white">
              <h4 className="uppercase text-sm">most wATCHLISTED</h4>
              <h4 className="font-semibold text-[18px]">Urban Prime Plaza Premiere</h4>
            </div>
            <div className="absolute bottom-2 left-1/2  flex space-x-1.5">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            </div>
          </div>
          <div className="w-[418px] h-[286px] rounded-[12px] overflow-clip relative">
            <img src={PhotoThree} alt="photo" className="w-full h-full object-cover" />
            <div className="absolute bottom-5 left-4 text-white">
              <h4 className="uppercase text-sm">HOTTEST LISTING</h4>
              <h4 className="font-semibold text-[18px]">Urban Prime Plaza Premiere</h4>
            </div>
            <div className="absolute bottom-2 left-1/2  flex space-x-1.5">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
