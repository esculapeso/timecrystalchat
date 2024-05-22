import CTAGooBG from "../../public/cta-goo-bg.webp";

export default function CallToAction() {
  // todo: make this real goo
  return (
    <div
      className="guide-footer-cta sm:flex items-center bg-pink-600 justify-between p-12 space-y-4"
      style={{
        background: `url('https://timecrystalesa.com/wp-content/uploads/2024/03/cropped-DALL%C2%B7E-2024-03-16-22.44.51-Illustrate-the-concept-of-human-consciousness-extending-beyond-the-physical-realm-into-a-higher-fourth-dimension-of-space-as-discussed-in-James-E.-B.webp') no-repeat center center`,
        backgroundSize: "cover",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div>
        <h1 className="text-2xl sm:text-3xl text-white font-bold">
          Time Crystal assistant powered by Llama 3
        </h1>
        <p className="text-white mx-auto mt-2 sm:mt-0">
          Generate your personal autogenic training with Llama 3 powered Time Crystal Assistant
        </p>
      </div>

      <a
        className="bg-black text-white text-small inline-block px-5 py-3 flex-none no-underline"
        href="https://replicate.com/blog/run-llama-3-with-an-api?utm_source=project&utm_campaign=llama2ai"
      >
        Get started &rarr;
      </a>
    </div>
  );
}
