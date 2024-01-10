import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const urlArr = req.url.split('/');
  const originUrl = `${urlArr[0]}//${urlArr[2]}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          color: '#fff',
          background: '#100f0f',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=''
            height={160}
            width={160}
            style={{ margin: '0 75px' }}
            src={`${originUrl}/favicon/favicon-light.png`}
          />
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 100,
            marginTop: 50,
            fontWeight: 'bold',
          }}
        >
          Hoà Nguyễn
        </div>
        <p
          style={{
            fontSize: 60,
            color: '#7f8ea3',
            padding: '0 10px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {
            "a front-end developer crafting immersive web experiences.\nExplore my projects and let's innovate together!"
          }
        </p>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  );
}
