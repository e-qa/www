import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '/images/profile.jpeg';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') || 'bumblebee'
  );

  const [selectedLanguage, setSelectedLanguage] = useState<string>('az');

  const handleTheme = () => {
    const newTheme = theme === 'bumblebee' ? 'halloween' : 'bumblebee';
    setTheme(newTheme);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className="flex items-center justify-between my-4">
      <Link to={'/'} className="text-4xl">
        <div className="avatar">
          <div className="avatar">
            <div className="mask mask-hexagon w-12">
              <img src={profile} alt="profile" />
            </div>
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-center gap-3 lg:gap-5">
        <Link to={'/contact'} className="text-xl lg:text-2xl">
          {t('contact')}
        </Link>

        <div className="dropdown dropdown-end">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
          <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <div className="divider">Lang</div>
            <li>
              <button
                onClick={() => changeLanguage('az')}
                className={`btn ${
                  selectedLanguage === 'az' ? 'btn-primary' : 'btn-ghost'
                }`}
              >
                Azərbaycanca
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguage('en')}
                className={`btn ${
                  selectedLanguage === 'en' ? 'btn-primary' : 'btn-ghost'
                }`}
              >
                English
              </button>
            </li>
            <div className="divider">Themes</div>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Bumblebee"
                value="bumblebee"
                checked={theme === 'bumblebee'}
                onChange={() => {
                  handleTheme();
                }}
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Halloween"
                value="halloween"
                checked={theme === 'halloween'}
                onChange={() => {
                  handleTheme();
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
