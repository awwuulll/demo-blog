import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Aul and her travel adventures",
    openGraph: {
      title: "About Me",
      description: "Learn more about Aul and her travel adventures",
      images: [
        signOgImageUrl({
          title: "Aul",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "About Me",
      description: "Learn more about Aul and her travel adventures",
      image: signOgImageUrl({
        title: "Aul",
        label: "About Me",
        brand: config.blog.name,
      }),
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <div>
          <h1 id="about-me">About Me</h1>
          <div className="flex justify-center px-4">
            <img
              src="https://fast.image.delivery/freriea.jpg" 
              alt="Aul&apos;s Profile Picture"
              className="w-4/5 aspect-[3/4] object-cover"
            />
          </div>
          <p>
            Hey there! I&apos;m Aulia, a 23-year-old former dota2 player warrior who
            decided to ditch the 9-to-5 grind and embark on an adventure of a
            lifetime. After years of hustling in a high-pressure job, I realized
            that life is too short to be stuck in an office, staring at
            spreadsheets all day.
          </p>
          <p>
            So I took a leap of faith, quit my cushy job in Singapore, and
            decided to see the world on my own terms. No more stuffy meetings or
            rigid schedules - just me, my backpack, and an open road ahead.
          </p>
          <p>
            <img
              src="https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/clvlugru90000o4g8ahxp069s/6b080e65-2329-4a36-ad5c-0a6af8d9aeb1.png/public"
              alt="Samantha Traveling"
            />
          </p>
          <p>
            This blog is where I&apos;ll be documenting my travels, sharing my
            experiences, and hopefully inspiring others to follow their
            wanderlust. From trekking through remote villages to savoring local
            cuisines, I&apos;m on a mission to immerse myself in different cultures
            and create memories that will last a lifetime.
          </p>
          <p>
            But this journey isn&apos;t just about checking off destinations from a
            bucket list. It&apos;s about self-discovery, personal growth, and finding
            the courage to live life on my own terms. I&apos;ll be honest and raw,
            sharing the highs and lows, the moments of pure bliss and the
            inevitable challenges that come with solo travel.
          </p>
          <p>
            So join me on this adventure, and let&apos;s explore the world together!
            Who knows, maybe my stories will inspire you to take that leap of
            faith and pursue your own dreams, whatever they may be.
          </p>
          <p>Let&apos;s go on an adventure!</p>
          <p>Love,</p>
          <p>Aul</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
