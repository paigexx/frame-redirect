import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
      {label: 'Play Beta', action: 'post_redirect'}
  ],
  image: 'https://scarlet-muddy-pike-648.mypinata.cloud/ipfs/QmTeLL1Uu78tBtQTsmE8Qapop1HbtqSq1NYTpEhSt56XiQ',
  post_url: 'https://frame-redirect.vercel.app/api/frame',
});

export const metadata: Metadata = {
  title: 'Redirect frame',
  description: 'LFG',
  openGraph: {
    title: 'Redirect frame',
    description: 'LFG',
    images: ['https://scarlet-muddy-pike-648.mypinata.cloud/ipfs/QmTeLL1Uu78tBtQTsmE8Qapop1HbtqSq1NYTpEhSt56XiQ'],
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
