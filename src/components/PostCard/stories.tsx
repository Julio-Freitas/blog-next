import { Story, Meta } from '@storybook/react/types-6-0';
import PostCard, { PostCardProps } from '.';

export default {
  title: 'PostCard',
  component: PostCard,

  args: {
    title: 'Default Title',
    slug: 'Default-slug',
    cover: 'https://static.toiimg.com/photo/72975551.cms',
    published: '2021-01-20 08:20',
  },
} as Meta;

export const Primary: Story<PostCardProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <PostCard {...args} />
  </div>
);
