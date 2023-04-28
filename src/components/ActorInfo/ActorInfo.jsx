import { Box } from 'components/Box/Box';
import { useTranslation } from 'react-i18next';
import {
  ActorInfoStyled,
  ReadMoreButton,
  ReadMoreStyled,
} from './ActorInfo.styled';
import { useState } from 'react';

export const ActorInfo = ({ data }) => {
  const [readMore, setReadMore] = useState(false);

  const { t } = useTranslation();
  const biography = data.biography.split('\n\n');
  const extraContent = (
    <div>
      {data.biography
        .split('\n\n')
        .map((el, idx) => idx > 2 && <p key={el}>{el}</p>)}
    </div>
  );

  return (
    <ActorInfoStyled>
      <h1>{data.name}</h1>
      <h2>{data.biography && t('actorPage.biography')}</h2>
      <ReadMoreStyled>
        {data.biography
          .split('\n\n')
          .map((el, idx) => idx <= 2 && <p key={el}>{el}</p>)}
        {!readMore && biography.length > 2 && biography.length !== 3 && (
          <Box display="flex" justifyContent="flex-end">
            <ReadMoreButton onClick={() => setReadMore(true)}>
              {t('actorPage.readMore')}
            </ReadMoreButton>
          </Box>
        )}
        {readMore && extraContent}
        {readMore && biography.length > 2 && (
          <Box display="flex" justifyContent="flex-end">
            <ReadMoreButton onClick={() => setReadMore(false)}>
              {t('actorPage.hide')}
            </ReadMoreButton>
          </Box>
        )}
      </ReadMoreStyled>

      <h2>{t('actorPage.knownFor')}</h2>

      <h5>{data.overview}</h5>
    </ActorInfoStyled>
  );
};
