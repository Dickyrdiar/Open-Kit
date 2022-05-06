import { ReactComponent as Find } from '../../assets/icons/file1.svg';
import { ReactComponent as Contribute } from '../../assets/icons/contibute.svg';
import { ReactComponent as Maintenance } from '../../assets/icons/maintenance.svg';

export const CardData = [
  {
    id: 1,
    label: 'Find',
    desc: 'You can find the product or the open source program in here',
    icons: <Find />
  },

  {
    id: 2,
    label: 'Contribute',
    desc: 'Contribute is important for continue open source program',
    icons: <Contribute />
  },

  {
    id: 3,
    label: 'Maintenance',
    desc: 'Update and Maintenanccd the open source code ',
    icons: <Maintenance />
  }
];
