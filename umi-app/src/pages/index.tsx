import './index.css'

const Image = (props) => {
  return (
    <img {...props} />
  );
};


export default function HomePage() {
  return (
    <main className="root flex w-full flex-col items-center justify-between">
      {/* header */}
      <div className="header w-full flex flex-row items-center justify-between">
        <div className="logo flex-1">
          <img
            src="./../static/logo.png"
            alt="Vercel Logo"
            className="log-img"
            width={242}
            height={51}
          // priority
          />
        </div>
        <div className="menu flex items-center">
          {/* <div className="header-btn roboto_mono">BTN</div>
          <div className="">
            <Image
              src="./../static/menu-icon.png"
              alt="Vercel Logo"
              width={23}
              height={22}
              priority
            />
          </div> */}
        </div>
      </div>
      {/* main body */}
      <div className="main-body flex items-center">
        <div className="main-body_info">
          <div className="	font-bold">
            <div className="">Pleasanton Ventures </div>
            <div className="">is a crypto hedge fund</div>
          </div>
          <div className="main-body-info_icon flex items-center mt-7">
            <Image
              src="./../static/motion_02.gif"
              alt="Vercel Logo"
              // className="dark:invert"
              width={100}
              height={100}
              priority
            />
            <div className="main-body_info-text">
              Dedicated to capturing liquidity opportunities across the Ethereum
              ecosystem, as well as emerging structural alpha within the
              industry.
            </div>
          </div>
        </div>
        <div className="main-body_video">
          <video autoPlay muted loop playsInline>
            <source
              src="./../static/motion_01_Export.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
      {/* split bg */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Image
          alt="pattern"
          src={'../.../../static/pattern.png'}
          sizes="100vw"
          // Make the image display full width
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      {/* section about us */}

      <div className="second-section w-full flex flex-col">
        <div className="about-us flex flex-col items-center">
          <div className="about-us-text">about us</div>
          <div className="second-section-links flex items-center w-full">
            <div className="second-section-links_item flex flex-1 flex-col items-center w-1-3	">
              <div className="second-section-links_item-icon">
                <Image
                  src="./../static/security-time.png"
                  alt="Vercel Logo"
                  className="second-section-links_item-icon-inner"
                  // className="dark:invert"
                  width={57}
                  height={57}
                // priority
                />
              </div>
              <div className="second-section-links_item-text text-xl mt-2 text-center leading-8	">
                Crypto Veterans{' '}
              </div>
              <div className="second-section-links_item-text text-xl mt-2 text-center leading-8	">
                Since 2016{' '}
              </div>
            </div>

            <div className="second-section-links_item  flex flex-1 flex-col items-center w-1-3	">
              <div className="second-section-links_item-icon">
                <Image
                  src="./../static/security-time.png"
                  alt="Vercel Logo"
                  // className="dark:invert"
                  className="second-section-links_item-icon-inner"
                  width={57}
                  height={57}
                // priority
                />
              </div>
              <div className="second-section-links_item-text text-xl mt-2 text-center leading-8">
                Crypto Veterans
              </div>
              <div className="second-section-links_item-text text-xl mt-2 text-center leading-8	">
                Since 2016{' '}
              </div>
            </div>

            <div className="second-section-links_item  flex flex-1 flex-col items-center w-1/3	">
              <div className="second-section-links_item-icon">
                <Image
                  src="./../static/buildings.png"
                  alt="Vercel Logo"
                  className="second-section-links_item-icon-inner"
                  // className="dark:invert"
                  width={57}
                  height={57}
                // priority
                />
              </div>
              <div className="second-section-links_item-text text-xl mt-2 text-center leading-8">
                Crypto Veterans
              </div>
              <div className="second-section-links_item-text text-xl mt-2 text-center leading-8	">
                Since 2016
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center flex-col justify-center	">
        <Image
          src="./../static/map.png"
          alt="Vercel Logo"
          className="bg-map"
          width={1112}
          height={370}
          priority
        />
        <div className="contact-us-container">
          <div className="contact-us-container-text text-4xl flex item-center justify-center mb-6">
            Contact Us
          </div>
          <div className="flex item-center justify-center">
            <div className="contact-btn">team@pleasantonventures.com</div>
          </div>
        </div>
      </div>
      <div className="footer flex items-center justify-between p-12">
        <div className="fs-3">
          © 2024 Pleasanton Ventures. All rights reserved.
        </div>
        <div className="footer-license flex  items-center">
          <span className="fs-3">Privacy Policy</span>
          <span className="fs-3">Terms & Conditions</span>
        </div>
      </div>
    </main>
  );
}
