import { DiscussionEmbed } from 'disqus-react';
import { ReactElement } from 'react';
import { SITE_URL } from '../../config/config';
import * as Styled from './style';

export type PropsCommentsProps = {
  slug: string;
  title: string;
};

const Comments = ({ slug, title }: PropsCommentsProps): ReactElement => (
  <Styled.Container>
    <DiscussionEmbed
      shortname="myblognext"
      config={{
        url: `${SITE_URL}/post/${slug}`,
        identifier: slug,
        title: title,
        language: 'pt-BR',
      }}
    />
  </Styled.Container>
);

export default Comments;
