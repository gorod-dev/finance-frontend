import { AppBar, Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { i18n, t } = useTranslation();

  const current = i18n.language;

  const handleSetRu = () => {
    i18n.changeLanguage('ru');
  };

  const handleSetEn = () => {
    i18n.changeLanguage('en');
  };

  const toggleLanguage = () => {
    if (current === 'en') {
      handleSetRu();
    } else {
      handleSetEn();
    }
  };

  return (
    <AppBar position="fixed" variant="elevation">
      <Box>
        <Button onClick={toggleLanguage}>{t(current)}</Button>
      </Box>
    </AppBar>
  );
};
