import { DiscussionEmbed } from 'disqus-react';
import { ReactElement } from 'react';
import * as Styled from './style';

export type PropsCommentsProps = {
  slug: string;
  title: string;
};

export const Comments = ({ slug, title }: PropsCommentsProps): ReactElement => (
  <Styled.Container>
    <DiscussionEmbed
      shortname={'myblognext'}
      config={{
        url: `vcap.me:3000/post/${slug}`,
        identifier: slug,
        title,
        language: 'pt-BR',
      }}
    />
  </Styled.Container>
);
