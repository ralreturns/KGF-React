import React from 'react'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import Component1 from '../components/component1'
import BlogPostCard1 from '../components/blog-post-card1'
import AppComponent from '../components/component'
import PlaceCard from '../components/place-card'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>KGF</title>
        <meta property="og:title" content="KGF" />
      </Helmet>
      <div className="landing-page-container01">
        <div className="landing-page-top-container">
          <nav data-role="Header" className="landing-page-navbar">
            <h1>KinderGartenFight</h1>
            <img
              alt="image"
              src="/playground_assets/kgf%20%5B1%5D-600h.png"
              className="landing-page-image"
            />
            <div data-type="BurgerMenu" className="landing-page-burger-menu">
              <svg viewBox="0 0 1024 1024" className="landing-page-burger-menu">
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
            <div data-type="MobileMenu" className="landing-page-mobile-menu">
              <div className="landing-page-nav">
                <div className="landing-page-top">
                  <h1>Travel</h1>
                  <div
                    data-type="CloseMobileMenu"
                    className="landing-page-close-menu"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="landing-page-icon03"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <div className="landing-page-right-side">
                  <div className="landing-page-links-container">
                    <span className="landing-page-text">Home</span>
                    <span className="landing-page-text01">About</span>
                    <span className="landing-page-text02">Tour Packages</span>
                    <span>Contact</span>
                  </div>
                  <SolidButton button="Explore places"></SolidButton>
                </div>
              </div>
              <div className="landing-page-follow-container">
                <span className="landing-page-text04">
                  Follow us on
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <div className="landing-page-icons-container">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="landing-page-link"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="landing-page-icon05"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="landing-page-link1"
                  >
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="landing-page-icon07"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="landing-page-link2"
                  >
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="landing-page-icon09"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div className="landing-page-hero">
            <div className="landing-page-content-container">
              <h1 className="heading landing-page-text05">
                <span>ASK FOR WHEAT &amp; WE&apos;LL GIVE VODKA</span>
                <span></span>
              </h1>
              <h2 className="subheading landing-page-subheading">
                ASK FOR OUR CLASSROOM &amp; WE&apos;LL SHOW YA
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page-banner">
        <div className="landing-page-gallery">
          <h1 className="landing-page-text08">Sneakpeek</h1>
          <span className="landing-page-text09"></span>
          <div className="landing-page-container02">
            <img
              alt="image"
              src="/playground_assets/68-1400w.png"
              className="landing-page-image01"
            />
            <img
              alt="image"
              src="/playground_assets/117-1400w.png"
              className="landing-page-image02"
            />
            <img
              alt="image"
              src="/playground_assets/106-1400w.png"
              className="landing-page-image03"
            />
            <img
              alt="image"
              src="/playground_assets/93-1400w.png"
              className="landing-page-image04"
            />
          </div>
        </div>
      </div>
      <div className="landing-page-container03">
        <div className="landing-page-container04">
          <div className="landing-page-container05">
            <div className="landing-page-blog">
              <div className="landing-page-container06">
                <Component1></Component1>
                <div className="landing-page-blog-post-card">
                  <img
                    alt="image"
                    src="/playground_assets/pool%20party-1500w.gif"
                    className="landing-page-image05"
                  />
                  <div className="landing-page-container07">
                    <h1 className="landing-page-text10"> 10% sold</h1>
                    <div className="landing-page-container08">
                      <span className="landing-page-text11">
                        Exclusive club of crypto, futures &amp; NFT traders
                        discussing the best investment opportunites, trades
                        &amp; upcoming bets while having a good time
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="landing-page-blog-post-card1">
                  <img
                    alt="image"
                    src="/playground_assets/wl%20pass-1500w.png"
                    className="landing-page-image06"
                  />
                  <div className="landing-page-container09">
                    <h1 className="landing-page-text12"> 25% sold</h1>
                    <div className="landing-page-container10">
                      <span className="landing-page-text13">
                        Private Discord channel with daily whitelists &amp;
                        invites to vetted projects
                      </span>
                    </div>
                  </div>
                </div>
                <div className="landing-page-blog-post-card2">
                  <img
                    alt="image"
                    src="/playground_assets/custom%20traits-1500w.png"
                    className="landing-page-image07"
                  />
                  <div className="landing-page-container11">
                    <h1 className="landing-page-text14">
                      50% sold
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="landing-page-container12">
                      <span className="landing-page-text15">
                        Traits, backgrounds &amp; items of our minters
                        imagination will form the 2nd half of the project
                      </span>
                    </div>
                  </div>
                </div>
                <div className="landing-page-blog-post-card3">
                  <img
                    alt="image"
                    src="/playground_assets/party%20giveaways-1500w.png"
                    className="landing-page-image08"
                  />
                  <div className="landing-page-container13">
                    <h1 className="landing-page-text16">
                      {' '}
                      75% sold
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="landing-page-container14">
                      <span className="landing-page-text17">
                        Bucketload of giveaways, raffles &amp; crypto
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="landing-page-blog-post-card4">
                  <img
                    alt="image"
                    src="/playground_assets/goat%20investment-1500w.png"
                    className="landing-page-image09"
                  />
                  <div className="landing-page-container15">
                    <h1 className="landing-page-text18">
                      {' '}
                      100% sold
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="landing-page-container16">
                      <span className="landing-page-text19">
                        Roadmap 2.0 🚀🚀🚀
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="landing-page-container17"></div>
            </div>
            <h1>Funds Use</h1>
            <div className="landing-page-blog1">
              <div className="landing-page-container18">
                <BlogPostCard1
                  title="50% funds go in this wallet"
                  image_src="/playground_assets/meta-chart%20%5B1%5D-1500w.png"
                  description="0x165CD37b4C644C2921454429E7F9358d18A45e14   You can also directly donate there, saves on the gas fees of minting"
                  rootClassName="rootClassName3"
                ></BlogPostCard1>
              </div>
              <div className="landing-page-container19">
                <BlogPostCard1
                  title="40% funds go in community wallet"
                  image_src="/playground_assets/3902e121-b258-4e24-9f04-1e9e99c47774-1500w.png"
                  description="Community driven funds to help the victims of war rebuild their lives  Save the Children  Red Cross  &amp; other community voted charities will be recipients of this slice"
                  rootClassName="rootClassName2"
                ></BlogPostCard1>
              </div>
              <div className="landing-page-container20">
                <BlogPostCard1
                  title="10% of the funds go to project development"
                  image_src="/playground_assets/kgf%20%5B1%5D-600h.png"
                  description="&amp; pay the team &amp; to cover the cost of the contract, site &amp; art"
                  rootClassName="rootClassName1"
                ></BlogPostCard1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppComponent></AppComponent>
      <div className="landing-page-container21">
        <div className="landing-page-container22">
          <div className="landing-page-container23">
            <div className="landing-page-cards-container">
              <PlaceCard
                city="Lionsky"
                image="/playground_assets/213-300h.png"
                description="Avid Futures trader &amp; frontend developer💻\n\nDabbles in solidity smart contracts sometimes\n\nloves wasting time on 🎮Fifa &amp; PUBG🔫"
              ></PlaceCard>
              <PlaceCard
                city="Beardimir"
                image="/playground_assets/250-300h.png"
                description="Okay Okay Artist &amp; NFT gambler💱\n\n2 intellectual professions😜, master of failing tasks successfully"
                rootClassName="place-card-root-class-name"
              ></PlaceCard>
              <div className="landing-page-features">
                <h1 className="landing-page-text21">Socials</h1>
                <div className="landing-page-container24">
                  <a
                    href="https://discord.com/invite/GXUGnUNGua"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      alt="image"
                      src="/playground_assets/discord-200h.png"
                      className="landing-page-image10"
                    />
                  </a>
                  <a
                    href="https://twitter.com/KGF_NFT"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      alt="image"
                      src="/playground_assets/twitter-200h.png"
                      className="landing-page-image11"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page-hero1">
        <div className="landing-page-container25">
          <div className="landing-page-container26">
            <a
              href="https://mint.kindergartenfight.site"
              target="_blank"
              rel="noreferrer noopener"
              className="landing-page-link5"
            >
              <h1 className="landing-page-text22">MINTING LIVE</h1>
            </a>
            <a
              href="https://mint.kindergartenfight.site"
              target="_blank"
              rel="noreferrer noopener"
              className="landing-page-link6"
            >
              <h1 className="landing-page-text23">
                <span>1000 Supply</span>
                <br></br>
                <span>0.1 ETH each</span>
              </h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
