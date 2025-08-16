import { Logo, MessageNotification, Notification, Calendar, Calculator } from '@/assets';

const navIcons = [Notification, Calculator, Calendar, MessageNotification];

const NavBar = () => {
  return (
    <header>
      <Logo />
      {navIcons.map((Icon) => (
        <Icon />
      ))}
    </header>
  );
};

export default NavBar;
