import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
      {label: 'Play Beta', action: 'post_redirect'}
  ],
  image: 'https://gold-mere-anglerfish-964.mypinata.cloud/ipfs/QmTa2TnVpVrkQp8yjjF7ZYTtzYPwj2dgE6HAGxHYqzk6Da/cc.jpg',
  post_url: 'https://frame-redirect.vercel.app/api/frame',
});

export const metadata: Metadata = {
  title: 'Redirect frame',
  description: 'LFG',
  openGraph: {
    title: 'Redirect frame',
    description: 'LFG',
    images: ['https://gold-mere-anglerfish-964.mypinata.cloud/ipfs/QmTa2TnVpVrkQp8yjjF7ZYTtzYPwj2dgE6HAGxHYqzk6Da/cc.jpg'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <img src={'/video.png'}/>
    </>
  );
}
