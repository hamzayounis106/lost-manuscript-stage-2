import PropTypes from 'prop-types';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

const SharePopup = ({ book, onClose }) => {
  const shareUrl = window.location.href;
  const shareText = `📖 Dive into an incredible read! "${book.book_title}" by ${book.person_name} is a must-read. 🌟 ${book.description} Don't miss out—check it out now!`;

  const socialLinks = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      icon: <FaFacebook size={24} />,
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareText
      )}&url=${encodeURIComponent(shareUrl)}`,
      icon: <FaTwitter size={24} />,
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}&summary=${encodeURIComponent(shareText)}`,
      icon: <FaLinkedin size={24} />,
    },
    {
      name: 'WhatsApp',
      url: `https://wa.me/?text=${encodeURIComponent(
        shareText + ' ' + shareUrl
      )}`,
      icon: <FaWhatsapp size={24} />,
    },
  ];

  return (
    <div className='fixed inset-0 bg-black/60  flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg p-6 w-96 '>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-bold '>Share this book</h2>
          <button
            onClick={onClose}
            className=' text-[#111827] hover:text-gray-800 transition-colors cursor-pointer'
          >
            <RxCross2 size={'26px'} />
          </button>
        </div>{' '}
        <div className='space-y-4'>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 p-3 border border-[#CCCCCC] rounded-lg hover:bg-gray-100 transition-colors'
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// Prop validation
SharePopup.propTypes = {
  book: PropTypes.shape({
    book_title: PropTypes.string.isRequired,
    person_name: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SharePopup;
