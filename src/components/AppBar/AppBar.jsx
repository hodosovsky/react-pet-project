import { LangButton, StyledAppBar, StyledNav } from './AppBar.styled';
import { FaPlus, FaBell } from 'react-icons/fa';
import { FiCircle, FiSearch } from 'react-icons/fi';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { Link, NavLink } from 'react-router-dom';

export const AppBar = () => {
  const { i18n } = useTranslation();
  const initLang = JSON.parse(localStorage.getItem('lang'));
  const [lang, setLang] = useLocalStorage('lang', initLang);
  const changeLanguage = () => {
    if (lang === 'en-US') {
      i18n.changeLanguage('uk-UA');
      setLang('uk-UA');
    } else {
      i18n.changeLanguage('en-US');
      setLang('en-US');
    }
    window.location.reload();
  };

  return (
    <StyledAppBar
      py={3}
      px="40px"
      display="flex"
      justifyContent="space-between"
      fontSize="m"
      bg="darkBlue"
      color="white"
      height="50px"
      as="header"
    >
      <StyledNav display="flex">
        <Link to="/">
          <Logo
            style={{ width: 154, height: 20, margin: 'auto', marginRight: 40 }}
          />
        </Link>

        <p>Фільми</p>
        <p>Серіали</p>
        <p>Персони</p>
        <p>Ще</p>
      </StyledNav>
      <StyledNav display="flex" m="auto 0" style={{ gap: 32 }}>
        <NavLink to={'login'}>
          <FaPlus size="20px" />
        </NavLink>
        {/* <FaLanguage size="20px" onClick={changeLanguage} /> */}
        <LangButton onClick={changeLanguage}>{lang}</LangButton>
        <FaBell size="20px" />
        <FiCircle size="20px" />
        <FiSearch size="20px" />
      </StyledNav>
    </StyledAppBar>
  );
};
