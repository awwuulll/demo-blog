import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Aul ",
    openGraph: {
      title: "About Me",
      description: "Learn more about Aul ",
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
      description: "Learn more about Aul ",
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
              alt="Aul's Profile Picture"
              className="w-4/5 aspect-[3/4] object-cover"
            />
          </div>
          <p>
            Halo! Nama saya Aulia Rahman Hakim, seorang Software Engineer dengan
            spesialisasi di bidang front-end. Saya baru saja lulus dari Jurusan
            Informatika di Universitas Islam Indonesia. Teknologi adalah passion
            saya, dan saya selalu mengikuti perkembangan terbaru di dunia
            teknologi.
          </p>
          <p>
            Di luar pekerjaan, saya memiliki berbagai minat. Saya sangat
            menyukai olahraga, terutama basket, bulu tangkis, dan weight
            lifting. Selain itu, saya juga gemar menonton film dan anime yang
            menginspirasi saya untuk terus berkembang dalam berbagai aspek
            kehidupan. Tak ketinggalan, saya juga suka bermain game sebagai cara
            untuk bersantai dan menambah wawasan.
          </p>
          <p>
            Di blog ini, saya akan berbagi pemikiran, pengalaman, serta ide-ide
            seputar dunia teknologi dan kehidupan sehari-hari. Semoga kamu bisa
            menemukan sesuatu yang bermanfaat di sini!
          </p>
          <p>
            Jika kamu tertarik untuk berdiskusi atau sekadar menyapa saya, jangan
            ragu untuk menghubungi saya.</p>
          <p>Aul</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
