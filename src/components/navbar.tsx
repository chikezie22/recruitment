import {
  Logo,
  MessageNotification,
  Notification,
  Calendar,
  Calculator,
  Sketch,
  Setting,
  TrendUp,
  Frame,
  HeaderText,
  UseFour,
  Contact,
  Lock,
  Sheild,
  Logout,
} from '@/assets';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { useState } from 'react';
import { Calendar as ShadcnCalendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

const navIcons = [
  {
    id: 'notification',
    Icon: Notification,
  },
  {
    id: 'calculator',
    Icon: Calculator,
    tooltip: 'Budgeting',
    openModal: 'budgeting',
  },
  {
    id: 'calendar',
    Icon: Calendar,
    tooltip: 'Calendar',
    openModal: 'calendar',
  },
  {
    id: 'messageNotification',
    Icon: MessageNotification,
  },
];

const budgeting = [
  {
    id: `setting`,
    Icon: Setting,
    title: `Set up annual budgets by account category`,
    p: `Allocate funds across income and expense lines with full visibility.`,
  },
  {
    id: `trendup`,
    Icon: TrendUp,
    title: `Track actuals vs budget in real time`,
    p: `See how your community is performing against plan, month by month.`,
  },
  {
    id: `frame`,
    Icon: Frame,
    title: `Adjust figures and forecast with ease`,
    p: `Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.`,
  },
];

const users = [
  {
    Icon: UseFour,
    text: `Teams`,
  },

  {
    Icon: Contact,
    text: '',
  },

  {
    Icon: Lock,
    text: '',
  },

  {
    Icon: Sheild,
    text: ``,
  },
  {
    Icon: Logout,
    text: `Logout`,
  },
];

const NavBar = () => {
  // const [openModal, setOpenModal] = useState<string | null>(null);
  // const handleOpenModal = (modal: string) => {
  //   setOpenModal(modal);
  // };
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <>
      <header className=" bg-black py-4  ">
        <nav className="flex items-center justify-between w-[90%] mx-auto max-w-[1440px]">
          <Logo />
          <ul className="flex items-center gap-6">
            {navIcons.map(({ id, Icon, tooltip }) => {
              const iconElement = (
                <li
                  key={id}
                  // onClick={openModal ? () => handleOpenModal(openModal) : undefined}
                  className="cursor-pointer"
                >
                  <Icon />
                </li>
              );

              // Wrap with tooltip if tooltip exists
              if (tooltip === 'Budgeting') {
                return (
                  <Tooltip key={id}>
                    <Dialog>
                      <TooltipTrigger asChild>
                        <DialogTrigger asChild>{iconElement}</DialogTrigger>
                      </TooltipTrigger>

                      <DialogContent showCloseButton={false} className="sm:max-w-[426px] space-y-6">
                        <DialogHeader className="mb-0">
                          <img src={Sketch} alt="sketch" className="rounded-tl-lg rounded-tr-lg" />
                        </DialogHeader>

                        <div className="sm:max-w-[344px] mx-auto space-y-6 ">
                          {budgeting.map(({ Icon, title, p }, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <Icon />
                              <div>
                                <p>{title}</p>
                                <p>{p}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <DialogFooter className="sm:justify-center max-w-[344px] mx-auto mb-6 w-full">
                          <DialogClose asChild>
                            <Button
                              className="w-full rounded-full font-euclid font-medium"
                              type="button"
                            >
                              Create Budget
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <TooltipContent className="mt-2">{tooltip}</TooltipContent>
                  </Tooltip>
                );
              }

              if (tooltip === 'Calendar') {
                return (
                  <Tooltip key={id}>
                    <Sheet>
                      <TooltipTrigger asChild>
                        <SheetTrigger> {iconElement}</SheetTrigger>
                      </TooltipTrigger>
                      <SheetContent className="bg-black text-white flex flex-col h-full">
                        <SheetHeader className="p-0 gap-0 shrink-0">
                          <SheetTitle className="bg-[#171717]">
                            <div className="py-3">
                              <HeaderText />
                            </div>
                          </SheetTitle>
                          <SheetDescription>
                            <div className="flex-1 flex items-center justify-center">
                              <ShadcnCalendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="
                                      w-full h-full
                                    bg-black text-white 
                                    [&_.rdp-month]:flex-1 [&_.rdp-month]:h-full
                                    [&_.rdp-table]:h-full
      "
                              />
                            </div>
                          </SheetDescription>
                        </SheetHeader>
                      </SheetContent>
                    </Sheet>

                    <TooltipContent className="mt-2">{tooltip}</TooltipContent>
                  </Tooltip>
                );
              }

              return iconElement;
            })}
            <Tooltip>
              <Popover>
                <TooltipTrigger asChild>
                  <PopoverTrigger asChild>
                    <div
                      className="h-[40px] aspect-square rounded-full
          bg-white text-black text-[23px] flex items-center justify-center font-euclid font-medium cursor-pointer relative"
                    >
                      D
                    </div>
                  </PopoverTrigger>
                </TooltipTrigger>

                <PopoverContent className="sm:max-w-[377px] space-y-3 p-4 shadow-[4px_4px_8px_rgba(123,157,157,0.15)] border-0 absolute -right-3 top-1">
                  <div className="px-3 py-4 flex items-center gap-3">
                    <div className="w-[56px] aspect-square rounded-full bg-[#176D58] flex justify-center items-center text-white font-medium text-[32px]">
                      D
                    </div>
                    <div className="space-y-2">
                      <p className="text-black font-semibold">Dylan Frank</p>
                      <p className="text-gray-500">dylan96@mail.com</p>
                    </div>
                  </div>

                  {users.map(({ Icon, text }) => (
                    <div key={text} className="py-3 flex items-center gap-4">
                      <Icon />
                      <p className="font-medium text-[18px]">{text}</p>
                    </div>
                  ))}
                </PopoverContent>
              </Popover>

              <TooltipContent className="mt-2 bg-ui px-4 py-3 ">
                <div className="flex flex-col gap-2">
                  <p className="font-euclid font-medium text-main-black">Dylan Frank</p>
                  <p className="text-semi-gray font-euclid font-light">dylanfrank96@gmail.com</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
