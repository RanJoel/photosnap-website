function Home1() {
  return (
    <main>
      <article className="flex flex-col">
        <section className="sm:flex bg-black">
          <picture className="order-1 flex-shrink-0">
            <source
              media="(min-width:1024px)"
              srcset="/images/home/desktop/create-and-share.jpg"
              className="w-full h-full object-cover"
            />
            <source
              media="(min-width:640px)"
              srcset="/images/home/tablet/create-and-share.jpg"
              className="w-full h-full object-cover"
            />
            <img
              src="/images/home/mobile/create-and-share.jpg"
              alt="Create and share"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="text-white px-8 py-20 h-96 sm:h-auto sm:px-12 sm:place-self-center lg:px-24 lg:flex-shrink">
            <h1 className="text-3xl font-bold tracking-widest mb-5 sm:text-4xl sm:mb-7">
              CREATE AND SHARE YOUR PHOTO STORIES.
            </h1>
            <p className="text-white text-opacity-50 text-sm mb-5 sm:mb-12">
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
            <div className="flex justify-start items-center">
              <div className="text-xs mr-4 tracking-widest font-bold">
                GET AN INVITE
              </div>
              <img src="/images/shared/desktop/arrow-white.svg" alt="" />
            </div>
          </div>
        </section>
        <section className="sm:flex">
          <picture className="flex-shrink-0">
            <source
              media="(min-width:1024px)"
              srcset="/images/home/desktop/beautiful-stories.jpg"
              className="w-full h-full object-cover"
            />
            <source
              media="(min-width:640px)"
              srcset="/images/home/tablet/beautiful-stories.jpg"
              className="w-full h-full object-cover"
            />
            <img
              src="/images/home/mobile/beautiful-stories.jpg"
              alt="Beautiful stories"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="px-8 py-20 h-96 sm:h-auto sm:px-12 sm:place-self-center lg:px-24 lg:flex-shrink">
            <h1 className="text-3xl font-bold tracking-widest mb-5 sm:text-4xl sm:mb-7">
              BEAUTIFUL STORIES EVERY TIME
            </h1>
            <p className="text-black text-opacity-50 text-sm mb-5 sm:mb-12">
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </p>
            <div className="flex justify-start items-center">
              <div className="text-xs mr-4 tracking-widest font-bold">
                VIEW THE STORIES
              </div>
              <img src="/images/shared/desktop/arrow.svg" alt="" />
            </div>
          </div>
        </section>
        <section className="sm:flex">
          <picture className="order-1 flex-shrink-0">
            <source
              media="(min-width:1024px)"
              srcset="/images/home/desktop/designed-for-everyone.jpg"
              className="w-full h-full object-cover"
            />
            <source
              media="(min-width:640px)"
              srcset="/images/home/tablet/designed-for-everyone.jpg"
              className="w-full h-full object-cover"
            />
            <img
              src="/images/home/mobile/designed-for-everyone.jpg"
              alt="Designed for everyone"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="px-8 py-20 h-96 sm:h-auto sm:px-12 sm:place-self-center lg:px-24 lg:flex-shrink">
            <h1 className="text-3xl font-bold tracking-widest mb-5 sm:text-4xl sm:mb-7">
              DESIGNED FOR EVERYONE
            </h1>
            <p className="text-black text-opacity-50 text-sm mb-5 sm:mb-12">
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </p>
            <div className="flex justify-start items-center">
              <div className="text-xs mr-4 tracking-widest font-bold">
                VIEW THE STORIES
              </div>
              <img src="/images/shared/desktop/arrow.svg" alt="" />
            </div>
          </div>
        </section>
      </article>

      <article className="sm:grid sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
        <section className="relative sm:col-span-1">
          <picture>
            <source
              media="(min-width:640px)"
              srcset="/images/stories/desktop/mountains.jpg"
              className="w-full h-full object-cover"
            />
            <img
              src="/images/stories/mobile/mountains.jpg"
              alt="Mountains"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute bottom-8 text-white w-full px-8">
            <div className="font-bold text-lg">The Mountains</div>
            <div className="text-xs mb-3">by John Appleseed</div>
            <hr className="mb-4 border-white border-opacity-50" />
            <div className="flex justify-between items-center">
              <div className="text-xs font-bold tracking-widest">
                READ STORY
              </div>
              <img src="/images/shared/desktop/arrow-white.svg" alt="" />
            </div>
          </div>
        </section>
        <section className="relative sm:col-span-1">
          <picture className="">
            <source
              media="(min-width:640px)"
              srcset="/images/stories/desktop/cityscapes.jpg"
              className="w-full h-full object-cover"
            />
            <img
              src="/images/stories/mobile/cityscapes.jpg"
              alt="Cityscapes"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute bottom-8 text-white w-full px-8">
            <div className="font-bold text-lg">Sunset Cityscapes</div>
            <div className="text-xs mb-3">by Benjamin Cruz</div>
            <hr className="mb-4 border-white border-opacity-50" />
            <div className="flex justify-between items-center">
              <div className="text-xs font-bold tracking-widest">
                READ STORY
              </div>
              <img src="/images/shared/desktop/arrow-white.svg" alt="" />
            </div>
          </div>
        </section>
        <section className="relative sm:col-span-1">
          <picture className="">
            <source
              media="(min-width:640px)"
              srcset="/images/stories/desktop/18-days-voyage.jpg"
              className="w-full h-full object-cover"
            />
            <img
              src="/images/stories/mobile/18-days-voyage.jpg"
              alt="18 Days Voyage"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute bottom-8 text-white w-full px-8">
            <div className="font-bold text-lg">18 Day Voyage</div>
            <div className="text-xs mb-3">by Alexei Borodin</div>
            <hr className="mb-4 border-white border-opacity-50" />
            <div className="flex justify-between items-center">
              <div className="text-xs font-bold tracking-widest">
                READ STORY
              </div>
              <img src="/images/shared/desktop/arrow-white.svg" alt="" />
            </div>
          </div>
        </section>
        <section className="relative sm:col-span-1">
          <picture className="">
            <source
              media="(min-width:640px)"
              srcset="/images/stories/desktop/architecturals.jpg"
              className="w-full h-full object-cover"
            />
            <img
              src="/images/stories/mobile/architecturals.jpg"
              alt="Architecturals"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute bottom-8 text-white w-full px-8">
            <div className="font-bold text-lg">Architecturals</div>
            <div className="text-xs mb-3">by Samantha Brooke</div>
            <hr className="mb-4 border-white border-opacity-50" />
            <div className="flex justify-between items-center">
              <div className="text-xs font-bold tracking-widest">
                READ STORY
              </div>
              <img src="/images/shared/desktop/arrow-white.svg" alt="" />
            </div>
          </div>
        </section>
      </article>
      <article className="">
        <div className="mx-8 my-16 lg:flex lg:justify-center lg:items-center lg:mx-36 lg:my-32">
          <section className="lg:self-end">
            <img
              src="/images/features/desktop/responsive.svg"
              alt=""
              className="mx-auto mb-10"
            />
            <div className="text-center mb-10 lg:mb-0">
              <div className="font-bold mb-4">100% Responsive</div>
              <p className="text-sm text-black text-opacity-60 sm:px-32 lg:px-10">
                No matter which the device you’re on, our site is fully
                responsive and stories look beautiful on any screen.
              </p>
            </div>
          </section>
          <section className="lg:self-end">
            <img
              src="/images/features/desktop/no-limit.svg"
              alt=""
              className="mx-auto mb-10"
            />
            <div className="text-center mb-10 lg:mb-0">
              <div className="font-bold mb-4">No Photo Upload Limit</div>
              <p className="text-sm text-black text-opacity-60 sm:px-32 lg:px-10">
                Our tool has no limits on uploads or bandwidth. Freely upload in
                bulk and share all of your stories in one go.
              </p>
            </div>
          </section>
          <section className="lg:self-end">
            <img
              src="/images/features/desktop/embed.svg"
              alt=""
              className="mx-auto mb-10"
            />
            <div className="text-center">
              <div className="font-bold mb-4">Available to Embed</div>
              <p className="text-sm text-black text-opacity-60 sm:px-32 lg:px-10">
                Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
                videos, Google Maps, and more.
              </p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

export default Home1;
