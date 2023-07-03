import toast from 'react-hot-toast';

export const ToasterNotify = message => {
  switch (message) {
    case 'AccountСreated':
      return toast.success('Goose registration successfully.');
    case 'LoginSuccessful':
      return toast.success('login successfully.');

    default:
      return toast.error(message);
  }
};
